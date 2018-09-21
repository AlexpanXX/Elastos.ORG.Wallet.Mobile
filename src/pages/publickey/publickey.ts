import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Native} from "../../providers/Native";
import {WalletManager} from '../../providers/WalletManager';
@Component({
  selector: 'page-publickey',
  templateUrl: 'publickey.html',
})
export class PublickeyPage {
  public masterWalletId:string ="1";
  public qrcode: string=null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public native: Native,public walletManager: WalletManager) {
        this.getPublicKey();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublickeyPage');
  }

  copy(){
    this.native.copyClipboard(this.qrcode);
    this.native.toast_trans('copy-ok');
  }

  getPublicKey(){
    this.walletManager.getPublicKey(this.masterWalletId,(data)=>{
      if(data["success"]){
        this.qrcode = data["success"];
        console.log("==========getPublicKey==============="+JSON.stringify(data));
       }else{
         alert("==========getPublicKey======error========="+JSON.stringify(data));
       }
    });
  }

}
