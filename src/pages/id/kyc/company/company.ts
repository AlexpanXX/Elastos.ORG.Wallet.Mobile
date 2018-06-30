import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../../../app/BaseComponent";
import {IdKycResultComponent} from "../../../../pages/id/kyc/result/result";
import {ApiUrl} from "../../../../providers/ApiUrl";
import {IDManager} from "../../../../providers/IDManager";
import {TransferComponent} from "../../../../pages/coin/transfer/transfer.component";

@Component({
  selector: 'id-company',
  templateUrl: 'company.html',
})
export class IdKycCompanyComponent extends BaseComponent implements OnInit {
  businessObj={
              "type":"1",
              "word":"xxx公司",
              "legalPerson":"张三",
              "registrationNum":"91311117011111111K",
              "txHash":"59e5347c8cd6ee04c9241d48494bf0182751a071f7fab2ee960b17ab51ff3280",
              };
  priceObj:any={};
  payMoney:number = 0;
  unit:string ="ELA";
  serialNum:string;
  idObj:any;
  ngOnInit() {
    this.setTitleByAssets('text-certified-company');
    this.idObj = this.getNavParams();
    this.getPrice();
    //this.getAppAuth();
  }

  onCommit(): void {
    //this.sendCompanyHttp();
    if(this.checkParms()){
      //this.businessObj["serialNum"] = this.serialNum;
      //this.Go(TransferComponent,{addr:"ENMLAuBi4qW7ViKwh6GbcaMcktU8j78T6F",money:this.payMoney,type:"kyc",chianId:"IdChain",selectType:"company",parm:this.businessObj});
      this.Go(IdKycResultComponent,this.idObj);
    }
  }

  checkParms(): boolean{
     if(this.isNull(this.businessObj.word)){
         this.messageBox('text-word-message');
         return false;
     }

     if(this.isNull(this.businessObj.legalPerson)){
      this.messageBox('text-legalPerson-message');
      return false;
     }

     if(this.isNull(this.businessObj.registrationNum)){
      this.messageBox('text-registrationN-message');
      return false;
     }

     return true;
  }

  // sendCompanyHttp(){
  //     let timestamp = this.getTimestamp();
  //     this.businessObj["timestamp"] = timestamp;
  //     this.businessObj["serialNum"] = this.serialNum;
  //     let checksum = IDManager.getCheckSum(this.businessObj,"asc");
  //     this.businessObj["checksum"] = checksum;
  //     this.getHttp().postByAuth(ApiUrl.AUTH,this.businessObj).toPromise().then(data => {
  //          //this.Go(ResultComponent,{'status':'0'});
  //     }).catch(error => {
  //          //this.Go(ResultComponent,{'status':'1'});
  //     });
  // }

  getPrice(){
    let timestamp = this.getTimestamp();
    let parms ={"appid":"elastid","timestamp":timestamp};
    let checksum = IDManager.getCheckSum(parms,"asc");
    parms["checksum"] = checksum;
    this.getHttp().postByAuth(ApiUrl.GET_PRICE,parms).toPromise().then().then(data => {
        if(data["status"] === 200){
          console.log("sssss======="+JSON.stringify(data));
          this.priceObj = JSON.parse(data["_body"]);
          this.payMoney = this.priceObj["price"] || 0.1;
          this.unit = this.priceObj["unit"] || "ELA";
          this.serialNum = this.priceObj["serialNum"];
         }
    }).catch(error => {

    });
  }

  getAppAuth(){
    let timestamp = this.getTimestamp();
    let parms ={"serialNum":"UZF1525871872898829",
                "txHash":"64a3d36afa4d5e45cd4aa6fab3c2c9f2c26c8d90b1784e994819f573b7488704",
                "vtoken":"ac00c95b543b77ee94a247bd0fed8467dd0dc7cb583be1dd2f8a0a83fce43256",
                "timestamp":timestamp,
               }
    let checksum = IDManager.getCheckSum(parms,"asc");
    parms["checksum"] = checksum;
    this.getHttp().postByAuth(ApiUrl.APP_AUTH,parms).toPromise().then().then(data => {
      if(data["status"] === 200){
        console.log("sssss======="+JSON.stringify(data));
       }
    }).catch(error => {

    });
  }
}
