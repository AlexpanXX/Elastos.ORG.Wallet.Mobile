import {Component, OnInit} from '@angular/core';
import {BaseComponent} from './../../../app/BaseComponent';
import {Logger} from "../../../providers/Logger";
import {AddressComponent} from "../../wallet/address/address.component";
import {Util} from "../../../providers/Util";


@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html'
})
export class ReceiveComponent extends BaseComponent implements OnInit {

  qrcode: string=null;
  address: Number;
  amount: Number;
  chinaId:string;
  ngOnInit() {
    this.setTitleByAssets('text-receive');
    this.chinaId=this.getNavParams().get("chianId");
    this.createAddress();
    this.setHeadDisPlay({left:true,title:true,right:true});
    this.setRightIcon('./assets/images/icon/icon-s.svg', () => {
      Logger.info('分享');
    });
  }

  onChange(){
    if(!Util.number(this.amount)){
      this.toast('correct-amount');
    }
  }


  onNext(type){
    switch (type){
      case 0:
        this.native.copyClipboard(this.qrcode);
        this.toast('copy-ok');
        break;
      case 1:
        this.createAddress();
        break;
      case 2:
        this.Go(AddressComponent);
        break;
    }
  }

  createAddress(){
    this.walletManager.createAddress(this.chinaId,(data)=>{
        this.qrcode = data.address;
        this.address =data.address;
    });
  }

}
