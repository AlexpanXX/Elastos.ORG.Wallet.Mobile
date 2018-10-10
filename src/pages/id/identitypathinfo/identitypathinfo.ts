import { Component ,OnInit} from '@angular/core';
import {BaseComponent} from "../../../app/BaseComponent";
import {IdentityauthPage} from '../../../pages/id/identityauth/identityauth';
import {PersonWriteChainPage} from "../../../pages/id/kyc/person-write-chain/person-write-chain";
import {IDManager} from "../../../providers/IDManager";
import {ApiUrl} from "../../../providers/ApiUrl";
import {Config} from "../../../providers/Config";

@Component({
  selector: 'page-identitypathinfo',
  templateUrl: 'identitypathinfo.html',
})
export class IdentitypathinfoPage extends BaseComponent implements OnInit{
  public identitypathlist =[];
  private parmar ={};
  public idsObj ={};
  ngOnInit(){
   this.parmar = this.getNavParams().data;
   console.log("---path---"+JSON.stringify(this.parmar));
   this.setTitleByAssets("text-identity-path-deatils");
    let masterWalletId = Config.getCurMasterWalletId();

   this.localStorage.getKyc().then((val)=>{
    if(val == null || val === undefined || val === {} || val === ''){
      return;
     }
    this.idsObj = JSON.parse(val);

    let pathList = this.idsObj[masterWalletId][this.parmar["id"]][this.parmar["path"]];

    for(let key in pathList){
       this.identitypathlist.push(pathList[key]);
    }


  });
  }

  onNext(item){
    this.jumpPage(item);
  }

  onCommit(){
    this.Go(IdentityauthPage,this.parmar);
  }

  jumpPage(item){
    switch(item["pathStatus"]){
          case 0 :
              break;
          case 1:
             this.getAppAuth(item);
              break;
          case 2 :
             this.Go(PersonWriteChainPage,item);
              break;
    }
}


getAppAuth(item){
  let serialNum = item["serialNum"];
  let txHash =  item["txHash"];
  console.log("getAppAuth======= txHash type "+typeof(txHash));
  console.log('ElastosJs--identitypathinfo.ts--getAppAuth----'+"---serialNum---"+serialNum+"---txHash---"+txHash);
  let timestamp = this.getTimestamp();
  let parms ={"serialNum":serialNum,
              "txHash":txHash,
              "timestamp":timestamp,
             }
  let checksum = IDManager.getCheckSum(parms,"asc");
  parms["checksum"] = checksum;
  this.getHttp().postByAuth(ApiUrl.APP_AUTH,parms).toPromise().then().then(data => {
    if(data["status"] === 200){
      console.log("sssss======="+JSON.stringify(data));
      let authResult = JSON.parse(data["_body"]);
      if(authResult["errorCode"] === "1"){
        this.messageBox("text-id-kyc-auth-fee-fail");
        return;
      }
      if(authResult["errorCode"] === "2"){
               this.messageBox("text-id-kyc-auth-query-timeout");
               return;
      }
      if(authResult["errorCode"] === "4"){
          this.messageBox("text-id-kyc-auth-uncompleted");
             return;
      }
      if(authResult["errorCode"] === "0"){
          //this.params["adata"] = authResult["data"];
          item["adata"] = authResult["data"];
          this.saveSerialNumParm(serialNum,item);

        if (authResult["data"].length > 0){
          var signCont = JSON.parse(JSON.stringify(authResult["data"][0]));
          let resultSign = signCont["resultSign"];
          delete signCont["resultSign"];

          this.dataManager.addSignCont(resultSign, signCont);

        }
      }
     }
  }).catch(error => {

  });
}

saveSerialNumParm(serialNum,item){
  let masterWalletId = Config.getCurMasterWalletId();

  item["pathStatus"] = 2;
   this.idsObj[masterWalletId][this.parmar["id"]][this.parmar["path"]][serialNum]= item;
   this.localStorage.setKyc(this.idsObj).then(()=>{
      this.Go(PersonWriteChainPage,item);
   });
}

}
