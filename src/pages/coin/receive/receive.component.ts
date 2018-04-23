import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../app/BaseComponent';
import {QrcodeModel} from '../../../models/qrcode.model';
import {HeaderComponent, Header} from '../../../app/header/app.header';


@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.less']
})
export class ReceiveComponent extends BaseComponent implements OnInit {


  code: QrcodeModel;

  ngOnInit() {
    this.setTitleByAssets('text-receive');
    this.code = new QrcodeModel();
    this.code.qrcode = 'EehM1A6MnVZxs6qH8AEA1pSLeW4RxmqhuU';

    this.header.rightIcon = './assets/images/icon/icon-share.svg';
   // this.header.backIcon = './assets/images/icon/icon-share.svg';
    this.header.rightClick = () => {
      this.log.info('分享');
    };


  }


}
