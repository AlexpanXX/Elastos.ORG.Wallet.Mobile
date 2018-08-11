import { Component,OnInit } from '@angular/core';
import {BaseComponent} from "../../../../app/BaseComponent";
import {IdHomeComponent} from "../../../../pages/id/home/home";
import {IDManager} from "../../../../providers/IDManager";
import { Config } from '../../../../providers/Config';
//{notary:"COOIX"}

@Component({
  selector: 'page-company-write-chain',
  templateUrl: 'company-write-chain.html',
})
export class CompanyWriteChainPage extends BaseComponent implements OnInit{
  type: string;
  approdType:string="company";
  businessObj={
    "word":"",
    "legalPerson":"",
    "registrationNum":"",
  }

  message:any={Id:"",Path:"",Proof:"",DataHash:"",Sign:""};
  passworld:string="";
  programJson:string;
  fromAddress:string;
  fee:number;
  did:string;
  idObj:any={};
 depositTransaction:string;
 depositTransactionFee:number;
 signature:string;
 orderStatus = 0;
 serialNum = "";
 ngOnInit(){
    this.setTitleByAssets('text-kyc-result');
    this.idObj = this.getNavParams().data;
    this.orderStatus = this.idObj["orderStatus"];
    this.serialNum = this.idObj["serialNum"];
    console.log("ngOnInit ====="+JSON.stringify(this.idObj));
    this.did = this.idObj["id"];
    this.getCompany();
    if(this.isNull(status)){
      this.type = '0';
    }else{
      this.type = status;
    }
    this.setLeftIcon('',()=>{
           this.Go(IdHomeComponent);
    });
  }

  getCompany(){
    let adata = this.idObj["adata"][0];
    let companyObj = adata["retdata"];
    this.message["Path"] = adata["type"];
    this.approdType = adata["type"];
    this.businessObj["word"] = companyObj["word"];
    this.businessObj["legalPerson"] = companyObj["legalPerson"];
    this.businessObj["registrationNum"] = companyObj["RegistrationNum"];
    this.signature = companyObj["signature"];
  }

  onCommit(){
    this.popupProvider.presentPrompt().then((val)=>{
              if(this.isNull(val)){
                this.messageBox("text-id-kyc-prompt-password");
                return;
              }
              this.passworld = val.toString();
              this.caulmessage();
    }).catch(()=>{

    });
    //this.didGenerateProgram();
  }

  didGenerateProgram(){

    console.log("---didGenerateProgram----"+"message="+JSON.stringify(this.message)+"passworld"+this.passworld);
    //console.log("---didGenerateProgram DataHash.length----"+ this.message.DataHash.length);
    //console.log("---didGenerateProgram----Sign.length"+ this.message.Sign.length);
    //console.log("---didGenerateProgram----Proof"+  this.message.Proof);
    //console.log("---didGenerateProgram----Proof"+ JSON.stringify(this.message.Proof) );

    this.walletManager.didGenerateProgram(this.did,JSON.stringify(this.message),this.passworld,(result)=>{
                   this.programJson  = result.value;
                   console.log("ElastosJs didGenerateProgram programJson "+JSON.stringify(this.programJson));
                   this.createfromAddress();
    });
  }

  createfromAddress(){
    this.walletManager.createAddress("IdChain",(result)=>{
              this.fromAddress = result.address;
              this.cauFee();
    });
  }

  cauFee(){

    //alert("createIdTransaction before" + this.fromAddress);
    this.walletManager.createIdTransaction("IdChain","",this.message,this.programJson,"","",(result)=>{
            console.log("---createIdTransaction---"+"fromAddress="+this.fromAddress+"message="+JSON.stringify(this.message)+"programJson="+this.programJson);
             let rawTransaction = result['json'].toString();
             console.log("createIdTransaction rawTransaction =="+rawTransaction);
             this.calculateTransactionFee(rawTransaction);
     });
  }

  calculateTransactionFee(rawTransaction){
     this.walletManager.calculateTransactionFee("IdChain", rawTransaction,10000, (data) => {

      this.fee = data['fee'];
      //console.log("Elastos 111111111111111");
      console.log("rawTransaction" + JSON.stringify(rawTransaction));
      console.log("calculateTransactionFee fee=="+JSON.stringify(this.fee));
      this.popupProvider.presentConfirm(this.fee/Config.SELA).then(()=>{
            this.sendRawTransaction(rawTransaction);
      });

     });
  }



  caulmessage(){

     //kyc 内容
     let kycContent={};
         kycContent = this.businessObj;
         this.message["Path"] = 'kyc'+"|"+"company"+"|"+"enterprise";
     //kyc 结果
     let authSign = {
                     signature:this.signature,
                     notary:"COOIX"
                    }
    console.log("caulmessage this.signature " +this.signature);
    console.log("caulmessage this.signature " +this.signature);

    let authDataHash = IDManager.hash(JSON.stringify(kycContent)+JSON.stringify(authSign));

    //console.log("caulmessage 2"+ authDataHash);


    let kycChainDataHash = IDManager.hash(authDataHash+JSON.stringify(authSign));

    console.log("caulmessage kycChainDataHash.length " +kycChainDataHash.length);

    //console.log("caulmessage 3"+ kycChainDataHash);

    let singObj = {Id:this.did,Path:this.message["Path"],Proof:authSign,DataHash:kycChainDataHash};

     this.walletManager.didSign(this.did,JSON.stringify(singObj),this.passworld,(result)=>{
      console.log("didSign 4"+ JSON.stringify(result));

       let proofString = JSON.stringify(authSign);
       //console.log("didSign proofString"+ proofString);

       this.message = {Id:this.did,Path:this.message["Path"],Proof: proofString,DataHash:kycChainDataHash,Sign:result.value};
       this.didGenerateProgram();
       //console.log("caulmessage Sign " +result.value + " result.value length "+ result.value.length);
       //console.log("didSign 5"+ JSON.stringify(this.message));

     });
 }


 sendRawTransaction( rawTransaction){
    //alert("sendRawTransaction begin==");

    this.walletManager.sendRawTransaction("IdChain",rawTransaction,this.fee,this.passworld,(result)=>{


     let rawTransactionObj = JSON.parse(rawTransaction);

      console.log("ElastosJs ---sendRawTransaction---"+"rawTransaction="+JSON.stringify(rawTransactionObj)+"fee="+this.fee);
      //console.log("ElastosJs ---sendRawTransaction--- PayLoad"+ JSON.stringify(rawTransactionObj.PayLoad));

      if (rawTransactionObj.PayLoad) {
        let arr = rawTransactionObj.PayLoad.Path.split("|");
        //
        if (arr[1]) {

          //let proofStr = rawTransactionObj.PayLoad.Proof;
          let proofObj = JSON.parse(rawTransactionObj.PayLoad.Proof);
          let self = this;
          //console.info("ElastosJs this.dataManager 1111111 " + this.dataManager );
           this.localStorage.getSeqNumObj(proofObj["signature"], rawTransactionObj.PayLoad.Id,"kyc", arr[1], function (reult : any) {
           console.info("ElastosJs reult" + JSON.stringify(reult) );

            self.dataManager.addSeqNumObj(proofObj["signature"] , reult );
            // if (reult) {
            //
            // }
          });



        }

      }
      this.setOrderStatus(2);
    })
 }


 //从主链转一批钱到测链

createDepositTransaction(){
  this.walletManager.createDepositTransaction("ELA","","XQd1DCi6H62NQdWZQhJCRnrPn7sF9CTjaU",this.fee,this.fromAddress,"qq",this.fee+"","","",(result)=>{
            this.depositTransaction = result['transactionId'].toString();
            //this.getDepositTransaction();
  });
}

getDepositTransaction(){
  this.walletManager.calculateTransactionFee("ELA",this.depositTransaction,10000, (data) => {
    this.depositTransactionFee = data['fee'];
  });
}

 sendDepositTransaction(){
     this.walletManager.sendRawTransaction("ELA",this.depositTransaction,20000,this.passworld,(result)=>{
       alert("sendDepositTransaction result"+JSON.stringify(result));
     })
 }

 setOrderStatus(status){
       let serids = Config.getSerIds();
       let serid = serids[this.serialNum];
       let did = serid["id"];
       let appName = serid["appName"];
       let appr = serid["appr"];
       let idsObj = {};
       this.localStorage.getKycList("kycId").then((val)=>{
           if(val == null || val === undefined || val === {} || val === ''){
                return;
           }
        idsObj = JSON.parse(val);
        idsObj[did][appName][appr]["order"][this.serialNum]["status"] = status;
        this.localStorage.set("kycId",idsObj).then(()=>{
                 this.orderStatus = status;
        });
       });
 }
}
