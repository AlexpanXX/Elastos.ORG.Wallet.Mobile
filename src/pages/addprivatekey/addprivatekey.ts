import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WalletManager} from '../../providers/WalletManager';
import {TabsComponent} from "../tabs/tabs.component";
import {Native} from "../../providers/Native";
import {Config} from "../../providers/Config";
import {LocalStorage} from "../../providers/Localstorage";
@Component({
  selector: 'page-addprivatekey',
  templateUrl: 'addprivatekey.html',
})
export class AddprivatekeyPage {
  masterWalletId:string = "1";
  public  publicKey:string="";
  private msobj:any;
  public  publicKeyArr:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public walletManager: WalletManager,public native:Native,public localStorage:LocalStorage) {
    console.log("=========AddpublickeyPage"+JSON.stringify(this.navParams.data));
    this.msobj = this.navParams.data;
    let totalCopayers = this.msobj["totalCopayers"];
    for(let index=0 ;index<totalCopayers-1;index++){
        let item ={index:index,publicKey:this.publicKey};
        this.publicKeyArr.push(item);
    }

    this.masterWalletId = Config.uuid(6,16);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprivatekeyPage');
  }

  nextPage(){
     //this.navCtrl.push(AddpublickeyPage);
     this.createWallet();
  }

  createWallet(){
     let copayers = this.getTotalCopayers();
     console.log("====mastId===="+this.masterWalletId+"====importText===="+this.msobj["importText"]+"====passWord===="+this.msobj["passWord"]+"====copayers===="+copayers+"==requiredCopayers=="+this.msobj["requiredCopayers"]);
     this.walletManager.createMultiSignMasterWalletWithPrivKey(this.masterWalletId,this.msobj["importText"],this.msobj["passWord"],copayers,this.msobj["requiredCopayers"],(data)=>{
               if(data['success']){
                 console.log("=====createMultiSignMasterWalletWithPrivKey======"+JSON.stringify(data));
                 //this.native.setRootRouter(TabsComponent);
                 this.createSubWallet("ELA");
               }else{
                 alert("=====createMultiSignMasterWalletWithPrivKey===error==="+JSON.stringify(data));
               }
     });
  }

  getTotalCopayers(){
    let arr = [];
    for(let index = 0;index<this.publicKeyArr.length;index++){
          let item = this.publicKeyArr[index];
          let publicKey =item["publicKey"].replace(/^\s+|\s+$/g,"");
          arr.push(publicKey);
    }
    return JSON.stringify(arr);
  }

  createSubWallet(chainId){
    // Sub Wallet
    this.walletManager.createSubWallet(this.masterWalletId,chainId, this.msobj["passWord"],true, 0, (data)=>{
          if(data["success"]){
               console.log("====createSubWallet===="+JSON.stringify(data));
               this.saveWalletList();
          }else{
                alert("createSubWallet=error:"+JSON.stringify(data));
          }
    });
  }

  saveWalletList(){
    Config.getMasterWalletIdList().push(this.masterWalletId);
     this.localStorage.saveCurMasterId({masterId:this.masterWalletId}).then((data)=>{
              Config.setCurMasterWalletId(this.masterWalletId);
              this.native.setRootRouter(TabsComponent);
      });
  }

}
