import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../app/BaseComponent';
import { PopupComponent } from "ngx-weui";
import {Util} from "../../../providers/Util";
import { Config } from '../../../providers/Config';
import {TabsComponent} from "../../tabs/tabs.component";

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html'
})
export class PaymentConfirmComponent extends BaseComponent implements OnInit {

  @ViewChild('subscribe') subPopup: PopupComponent;
  masterWalletId:string = "1";
  transfer: any = {
    toAddress: '',
    amount: '',
    memo: '',
    fee: 0,
    payPassword:'',
    remark:'',
  };

  chianId: string = 'ELA';

  feePerKb = 10000;

  rawTransaction: '';

  SELA = Config.SELA;

  txId: string;

  balance: 0;

  information: string;

  ngOnInit(){
    this.setTitleByAssets('text-payment-confirm');
    this.setHeadDisPlay({left:false});
    this.subPopup.config = {cancel:'',confirm:'',backdrop:false,is_full:false};

    this.getAllMasterWallets();
    let account = this.GetQueryString("account") || this.getNavParams().get("account");
    let toAddress = this.GetQueryString("address") || this.getNavParams().get("address");
    let memo = this.GetQueryString("memo") || this.getNavParams().get("memo");
    let information = this.GetQueryString("information");
    this.transfer.amount = account;
    this.transfer.toAddress = toAddress;
    this.transfer.memo = memo;
    this.information = information;
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
      }else{
        alert("====getAllSubWallets=error==="+JSON.stringify(data));
      }
    })
  }

  GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;
  }

  onClick(type){
    switch (type) {
      case 1:
        break;
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
    if(Util.isNull(this.transfer.toAddress)){
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
    this.walletManager.isAddressValid(this.masterWalletId,this.transfer.toAddress, (data) => {
      if (!data['success']) {
        this.toast("contact-address-digits");
        return;
      }
      this.createTransaction();
      this.subPopup.show().subscribe((res: boolean) => {
      });
    })
  }

  createTransaction(){
    this.walletManager.createTransaction(this.masterWalletId,this.chianId, "",
      this.transfer.toAddress,
      this.transfer.amount,
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

  sendRawTransaction(){
    if (!Util.password(this.transfer.payPassword)) {
      this.toast("text-pwd-validator");
      return;
    }
    this.walletManager.sendRawTransaction(this.masterWalletId,this.chianId, this.rawTransaction, this.transfer.fee, this.transfer.payPassword, (data) => {

      if(data['success']){
        this.txId = JSON.parse(data['success'])["TxHash"];
        this.walletManager.registerWalletListener(this.masterWalletId,this.chianId, (data) => {
          if (data['confirms'] == 1) {
            this.popupProvider.ionicAlert('confirmTitle', 'confirmTransaction').then((data) => {
            });
          }
        });
        let result = {
          txId: this.txId
        }
        return result;
      }else{
        this.toast('text-password-error');
      }
      this.Go(TabsComponent);
    });
  }

}
