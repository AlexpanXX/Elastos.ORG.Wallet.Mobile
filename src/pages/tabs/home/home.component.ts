import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../app/BaseComponent';
import {CoinComponent} from "../../coin/coin.component";
import {CoinListComponent} from "../../coin/coin-list/coin-list.component";
import { Config } from '../../../providers/Config';
import { PaymentConfirmComponent } from '../../coin/payment-confirm/payment-confirm.component';
import {WalltelistPage} from '../../../pages/walltelist/walltelist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends BaseComponent implements OnInit {
  masterWalletId:string ="1";
  elaPer:any;
  tempElaPer:any;
  idChainPer:any;
  tempIdChinaPer:any;
  wallet = {
    name: 'myWallet',
    showBalance: true
  };
  ElaObj ={"name":"ELA","balance":0};
  coinList = []

  ngOnInit() {
    this.goPayment();
    setInterval(()=>{
      this.elaPer = this.tempElaPer;
      this.idChainPer = this.tempIdChinaPer;
    },0);
    this.getAllMasterWallets();
    this.events.subscribe("wallte:update",(item)=>{
      console.log("Selected Item", item);
    });
    this.events.subscribe('home:update', () => {
           this.getElaBalance(this.ElaObj);
           this.localStorage.get('coinListCache').then((val)=>{
            let coinListCache = JSON.parse(val);
            for (let coin in coinListCache) {
              this.getSubBalance(coin);
            }
          });
    });


    // wallet name
    this.localStorage.getWallet().then((val) => {
      if (val) {
        this.wallet.name = JSON.parse(val).name;
      }
    });

   }

  onOpen() {
    this.wallet.showBalance = !this.wallet.showBalance;
  }

  goPayment() {
    this.localStorage.get('payment').then((val)=>{
      if (val) {
        this.localStorage.remove('payment');
        this.Go(PaymentConfirmComponent, JSON.parse(val));
      }
    });
  }

  onClick(type){
    switch (type){
      case 0:
        this.Go(WalltelistPage);
        break;
      case 1:
        this.Go(CoinListComponent);
        break;
    }
  }

  onItem(item) {
    this.Go(CoinComponent, {name: item.name,"elaPer":this.tempElaPer,"idChainPer":this.tempIdChinaPer});
  }

  getElaBalance(item){
    this.walletManager.getBalance(this.masterWalletId,item.name,(data)=>{
      if(data["success"]){
        console.log("getBalance="+JSON.stringify(data));
        this.ElaObj.balance = data.balance/Config.SELA;
      }else{
        alert("getElaBalance=error:"+JSON.stringify(data));
      }

    })
  }

  getAllMasterWallets(){
    this.walletManager.getAllMasterWallets((data)=>{
      if(data["success"]){
        console.log("=getAllMasterWallets="+JSON.stringify(data));
        this.getAllSubWallets();
      }else{
        alert("getAllMasterWallets=error:"+JSON.stringify(data));
      }

    });
  }

  getAllSubWallets(){
    this.walletManager.getAllSubWallets(this.masterWalletId,(data)=>{
      if(data["success"]){
        console.log("getAllSubWallets="+JSON.stringify(data));
        this.sycEla();
        this.getElaBalance(this.ElaObj);
        this.localStorage.get('coinListCache').then((val)=>{
          let coinListCache = JSON.parse(val);
          for (let coin in coinListCache) {
             this.sycIdChain();
             this.getSubBalance(coin);
          }
        });
      }else{
        alert("getAllSubWallets=error:"+JSON.stringify(data));
      }
    });
  }

  getSubBalance(coin){
    this.walletManager.getBalance(this.masterWalletId,coin, (data)=>{
      console.log("getSubBalance="+JSON.stringify(data));
      if(data["success"]){
         if(this.coinList.length === 0){
          this.coinList.push({name: coin, balance: data.balance/Config.SELA});
         }else{
            let index = this.getCoinIndex(coin);
            if(index!=-1){
               let item = this.coinList[index];
                   item["balance"] =  data.balance/Config.SELA;
                   this.coinList.splice(index,1,item);

            }else{
                   this.coinList.push({name: coin, balance: data.balance/Config.SELA});
            }
         }
      }else{
               alert("getSubBalance=error"+JSON.stringify(data));
      }
    });
  }

  getCoinIndex(coin){

   for(let index = 0; index <this.coinList.length;index++){
             let item = this.coinList[index];
              if(coin === item["name"]){
                    return index;
              }
   }
   return -1;
  }

  sycEla(){

    this.walletManager.registerWalletListener(this.masterWalletId,"ELA",(result)=>{
           if(result["success"]){
            console.log("===registerWalletListener+ELA"+JSON.stringify(result));
            if(result["OnBlockSyncStopped"] === "OnBlockSyncStopped"){
              this.tempElaPer = 1;
           }else{
            this.tempElaPer= result["progress"].toFixed(2);
           }

           if(this.tempElaPer === 1){
            this.getElaBalance(this.ElaObj);
           }
           }else{
             alert("===registerWalletListener+ELA=error"+JSON.stringify(result));
           }
    });
  }

  sycIdChain(){
    this.walletManager.registerWalletListener(this.masterWalletId,"IdChain",(result)=>{
      if(result["success"]){
        console.log("===registerWalletListener+ELA+Id"+JSON.stringify(result));
        if(result["OnBlockSyncStopped"] === "OnBlockSyncStopped"){
          this.tempIdChinaPer = 1;
        }else{
          this.tempIdChinaPer  = result["progress"].toFixed(2);
        }

        if(this.tempIdChinaPer === 1){
                 this.getSubBalance("IdChain");
        }
      }else{
        alert("===registerWalletListener+ELA=error"+JSON.stringify(result));
      }
    });
  }
}
