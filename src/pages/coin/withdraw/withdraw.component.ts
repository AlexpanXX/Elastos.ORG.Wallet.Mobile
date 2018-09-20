import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from './../../../app/BaseComponent';
import {TabsComponent} from "../../tabs/tabs.component";
import {Util} from "../../../providers/Util";
import { PopupComponent } from "ngx-weui";
import { Config } from '../../../providers/Config';
@Component({
  selector: 'app-transfer',
  templateUrl: './withdraw.component.html'})
export class WithdrawComponent extends BaseComponent implements OnInit {

  @ViewChild('subscribe') subPopup: PopupComponent;
  masterWalletId:string = "1";
  transfer: any = {
    toAddress: '',
    amount: '',
    memo: '',
    fee: 20000,
    payPassword:'',
    remark:'',
  };

  mainchain: any = {
    accounts: '',
    amounts: 0,
    index: 0,
    rate: 1,
  };

  balance = 0;

  chianId: string;

  feePerKb = 10000;

  rawTransaction: '';

  SELA = Config.SELA;

  ngOnInit() {
    this.setTitleByAssets('text-withdraw');
    let transferObj =this.getNavParams().data;
    this.chianId = transferObj["chianId"];
    this.initData();

    this.setRightIcon('./assets/images/icon/ico-scan.svg', () => {
      this.native.scan().then((q)=>{
        let result = q.text;
        if (result.indexOf('elastos') != -1) {
          this.mainchain.accounts = result.split(":")[1];
        } else {
          this.mainchain.accounts = result.split(":")[0];
        }
      }).catch(err=>{
          this.toast('error-address');
      });
    });

    this.setHeadDisPlay({right: true});
    this.subPopup.config = {cancel:'',confirm:'',backdrop:false,is_full:false};
  }

  initData(){
    this.walletManager.getBalance(this.masterWalletId,this.chianId, (data)=>{
      if(!Util.isNull(data["success"])){
        console.log("===getBalance==="+JSON.stringify(data));
        this.balance = data["success"];
      }else{
       alert("===getBalance===error"+JSON.stringify(data));
      }
    });
  }


  onClick(type) {
    switch (type) {
      // case 1:
      //   this.Go(ContactListComponent);
      //   break;
      case 2:   // 转账
        this.checkValue();
        break;
      case 3:
        this.subPopup.close();
        break;
      case 4:
        this.sendRawTransaction();
        break;
    }
  }

  checkValue() {
    if(Util.isNull(this.mainchain.accounts)){
      this.toast('correct-address');
      return;
    }
    if(Util.isNull(this.transfer.amount)){
      this.toast('amount-null');
      return;
    }
    if(!Util.number(this.transfer.amount)){
      this.toast('correct-amount');
      return;
    }
    if(this.transfer.amount > this.balance){
      this.toast('error-amount');
      return;
    }
    this.walletManager.isAddressValid(this.masterWalletId,this.mainchain.accounts, (data) => {
      if (!data['success']) {
        this.toast("contact-address-digits");
        return;
      }
      this.createWithdrawTransaction();
      this.subPopup.show().subscribe((res: boolean) => {
      });
    })
  }

  createWithdrawTransaction(){
    this.getDestroyAddress();
    let mainchainAddress = JSON.stringify([this.mainchain.accounts]);
    let mainchainAmounts = JSON.stringify([this.transfer.amount*Config.SELA - this.transfer.fee]);
    let mainchainIndex = JSON.stringify([this.mainchain.index]);
    this.walletManager.createWithdrawTransaction(this.masterWalletId,this.chianId, "",
      this.transfer.toAddress, // 销毁地址 34*0 ''
      this.transfer.amount*Config.SELA, // user input amount
      mainchainAddress, // user input address
      mainchainAmounts, // TODO default:0
      mainchainIndex, // TODO default:0
      this.transfer.memo,
      this.transfer.remark,
      (data)=>{
        if(data['success']){
          console.log("=======createTransaction======"+JSON.stringify(data));
          this.rawTransaction = data['success'];
          this.getFee();
        }else{
          alert("====createTransaction====error"+JSON.stringify(data));
        }
      });
  }

  getDestroyAddress(){
    // this.walletManager.getGenesisAddress(this.chianId, (data) => {
      this.transfer.toAddress = '1111111111111111111114oLvT2';
    // });
  }

  getFee(){
    this.walletManager.calculateTransactionFee(this.masterWalletId,this.chianId, this.rawTransaction, this.feePerKb, (data) => {
      if(data['success']){
        console.log("=======calculateTransactionFee======"+JSON.stringify(data));
        this.transfer.fee = data['success'];
      }else{
        alert("====calculateTransactionFee====error"+JSON.stringify(data));
      }
    });
  }

  // getRate(){
  //   this.sidechain.rate = 1;
  // }

  sendRawTransaction(){
    if (!Util.password(this.transfer.payPassword)) {
      this.toast("text-pwd-validator");
      return;
    }
    this.walletManager.sendRawTransaction(this.masterWalletId,this.chianId, this.rawTransaction, this.transfer.fee, this.transfer.payPassword, (data) => {
      if(data['success']){
        console.log("===sendRawTransaction===="+JSON.stringify(data));
        this.Go(TabsComponent);
      }else{
        alert("===sendRawTransaction==error=="+JSON.stringify(data));
      }
    });
  }

}
