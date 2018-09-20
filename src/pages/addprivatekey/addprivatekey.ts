import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddpublickeyPage} from '../../pages/addpublickey/addpublickey';
@Component({
  selector: 'page-addprivatekey',
  templateUrl: 'addprivatekey.html',
})
export class AddprivatekeyPage {
  public  publicKey:string="";
  private msobj:any;
  public  publicKeyArr:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("=========AddpublickeyPage"+JSON.stringify(this.navParams.data));
    this.msobj = this.navParams.data;
    let totalCopayers = this.msobj["totalCopayers"];
    for(let index=0 ;index<totalCopayers-1;index++){
        let item ={index:index,publicKey:index};
        this.publicKeyArr.push(item);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprivatekeyPage');
  }

  nextPage(){
     //this.navCtrl.push(AddpublickeyPage);
  }

}
