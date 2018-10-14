import {Component} from '@angular/core';
import { Config } from '../../../providers/Config';
import { NavController, NavParams,Events} from 'ionic-angular';
import {WalletManager} from '../../../providers/WalletManager';
import {Native} from "../../../providers/Native";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
})
export class AddressComponent {
  masterWalletId:string ="1";
  addrList = [];
  chinaId: string;
  pageNo = 0;
  constructor(public navCtrl: NavController,public navParams: NavParams, public walletManager: WalletManager,public events :Events,public native :Native){
         this.init();
  }
  init() {
    this.masterWalletId = Config.getCurMasterWalletId();
    this.chinaId = this.navParams.get("chinaId");
    this.getAddressList();
  }

  getAddressList(){
    this.walletManager.getAllAddress(this.masterWalletId,this.chinaId,this.pageNo, (data) => {
      if(data["success"]){
        console.log("===getAllAddress==="+JSON.stringify(data));
        if(this.pageNo != 0){
        this.addrList = this.addrList.concat(JSON.parse(data["success"])['Addresses']);
        }else{
          this.addrList = JSON.parse(data["success"])['Addresses'];
        }
      }else{
        alert("==getAllAddress==error"+JSON.stringify(data))
      }
    });
  }

  onItem(item) {
    this.native.copyClipboard(item);
    this.native.toast_trans('copy-ok');
  }

  doRefresh(refresher){
     this.pageNo = 0;
     this.getAddressList();
     setTimeout(() => {
      refresher.complete();
      //toast提示
      this.native.toast("加载成功");
  },2000);
  }

  doInfinite(infiniteScroll){
    setTimeout(() => {
      this.pageNo++;
      this.getAddressList();
      infiniteScroll.complete();
    },2000);
  }
}
