import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {WalletManager} from '../../../providers/WalletManager';
import {Native} from "../../../providers/Native";
import {LocalStorage} from "../../../providers/Localstorage";
import {TabsComponent} from '../../../pages/tabs/tabs.component';
import {Util} from "../../../providers/Util";
import {Config} from '../../../providers/Config';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html'
})
export class ImportComponent {
  masterWalletId:string = "1";
  public selectedTab: string="words";
  public showAdvOpts:boolean;
  public keyStoreContent:any;
  public importFileObj:any={payPassword: "",rePayPassword: "", backupPassWord: "",phrasePassword:""};
  public mnemonicObj:any={mnemonic:"",payPassword: "", rePayPassword: "",phrasePassword:""};
  public walletType:string;
  constructor(public navCtrl: NavController,public navParams: NavParams, public walletManager: WalletManager,public native: Native,public localStorage:LocalStorage) {
         this.masterWalletId = Config.uuid(6,16);
  }
  public toggleShowAdvOpts(): void {
    this.showAdvOpts = !this.showAdvOpts;
  }
  selectTab(tab: string) {
     this.selectedTab = tab;
  }


  onImport() {
     this.native.showLoading();
     switch(this.selectedTab){
       case "words":
            if(this.checkWorld()){
               this.importWalletWithMnemonic();
            }
       break;
       case "file":
          if(this.checkImportFile()){
               this.importWalletWithKeystore();
          }
       break;
     }
  }

  checkImportFile(){
   if(Util.isNull(this.keyStoreContent)){
      this.native.hideLoading();
      this.native.toast_trans('import-text-keystroe-message');
          return false;
    }
    if(Util.isNull(this.importFileObj.backupPassWord)){
      this.native.hideLoading();
      this.native.toast_trans('text-backup-passworld-input');
      return false;
    }
    if(Util.isNull(this.importFileObj.payPassword)){
      this.native.hideLoading();
      this.native.toast_trans('text-pay-passworld-input');
      return false;
    }

    if(this.importFileObj.payPassword!=this.importFileObj.rePayPassword){
      this.native.hideLoading();
      this.native.toast_trans('text-passworld-compare');
      return false;
    }
    return true;
  }

  importWalletWithKeystore(){
    this.walletManager.importWalletWithKeystore(this.masterWalletId,
                      this.keyStoreContent,this.importFileObj.backupPassWord,
                      this.importFileObj.payPassword,this.importFileObj.phrasePassword,
                      (data)=>{
                        if(data["success"]){
                            this.walletManager.getMasterWalletBasicInfo(this.masterWalletId,(data)=>{
                            if(data["success"]){
                               console.log("===getMasterWalletBasicInfo==="+JSON.stringify(data));
                               this.walletType = JSON.parse(data["success"])["Account"]["Type"];
                               let single = false;
                               if(this.walletType === "Multi-Sign"){
                                   single = true;
                               }

                               this.walletManager.createSubWallet(this.masterWalletId,"ELA", this.importFileObj.payPassword,single, 0, (data)=>{
                                if(data["success"]){
                                   this.getAllCreatedSubWallets();
                                 }else{
                                   this.native.hideLoading();
                                   alert("=====createSubWallet=error"+JSON.stringify(data));
                                 }
                               });
                            }else{
                               this.native.hideLoading();
                               alert("=======getMasterWalletBasicInfo====error====="+JSON.stringify(data));
                            }
                          });

                        }else{
                           this.native.hideLoading();
                           alert("=====importWalletWithKeystore=error"+JSON.stringify(data));
                        }
                      });
  }

  checkWorld(){
    if(Util.isNull(this.mnemonicObj.mnemonic)){
      this.native.hideLoading();
        this.native.toast_trans('text-input-mnemonic');
        return false;
    }

    let mnemonic = this.normalizeMnemonic(this.mnemonicObj.mnemonic).replace(/^\s+|\s+$/g,"");
    if(mnemonic.split(/[\u3000\s]+/).length != 12){
      this.native.hideLoading();
      this.native.toast_trans('text-mnemonic-validator');
      return false;
    }

    if(Util.isNull(this.mnemonicObj.payPassword)){
      this.native.hideLoading();
      this.native.toast_trans('text-pay-password');
      return false;
    }
    if (!Util.password(this.mnemonicObj.payPassword)) {
      this.native.hideLoading();
      this.native.toast_trans("text-pwd-validator");
      return;
    }
    if(this.mnemonicObj.payPassword!=this.mnemonicObj.rePayPassword){
      this.native.toast_trans('text-passworld-compare');
      return false;
    }
    return true;
  }


  private normalizeMnemonic(words: string): string {
    if (!words || !words.indexOf) return words;
    let isJA = words.indexOf('\u3000') > -1;
    let wordList = words.split(/[\u3000\s]+/);

    return wordList.join(isJA ? '\u3000' : ' ');
  };

  importWalletWithMnemonic(){
    let mnemonic = this.normalizeMnemonic(this.mnemonicObj.mnemonic);
    console.log("====mnemonic ===="+mnemonic);
    this.walletManager.importWalletWithMnemonic(this.masterWalletId,mnemonic,this.mnemonicObj.phrasePassword,this.mnemonicObj.payPassword,this.native.getMnemonicLang(),(data)=>{
                if(data["success"]){
                   this.walletManager.getMasterWalletBasicInfo(this.masterWalletId,(data)=>{
                    if(data["success"]){
                       this.walletType = JSON.parse(data["success"])["Account"]["Type"];
                       let single = false;
                       if(this.walletType === "Multi-Sign"){
                           single = true;
                       }
                       this.walletManager.createSubWallet(this.masterWalletId,"ELA", this.mnemonicObj.payPassword,single, 0, (data)=>{
                        if(data["success"]){
                          this.native.toast_trans('import-text-world-sucess');
                          this.localStorage.remove('coinListCache').then(()=>{
                          this.saveWalletList();
                        });
                        }else{
                             this.native.hideLoading();
                             alert("createSubWallet==error"+JSON.stringify(data));
                        }
                         });
                      }else{
                        this.native.hideLoading();
                        alert("=======getMasterWalletBasicInfo====error====="+JSON.stringify(data));
                      }
                    });
                }else{
                    this.native.hideLoading();
                    alert("importWalletWithMnemonic==error"+JSON.stringify(data));
                }
            });
  }

  getAllCreatedSubWallets(){

      this.walletManager.getAllSubWallets(this.masterWalletId,(data) => {
        if(data["success"]){
          let chinas = this.getCoinListCache(JSON.parse(data["success"]));
           this.localStorage.set('coinListCache',chinas).then(()=>{
            this.native.toast_trans('import-text-keystroe-sucess');
            this.saveWalletList();
           });
        }else{
            this.native.hideLoading();
            alert("==getAllSubWallets==error"+JSON.stringify(data));
        }

      });

  }

   getCoinListCache(createdChains){
    let chinas = {};
    for (let index in createdChains) {
           let chain = createdChains[index];
           if(chain != "ELA"){
            chinas[chain] = chain;
           }
    }
         return chinas;
  }

  saveWalletList(){
    Config.getMasterWalletIdList().push(this.masterWalletId);
            this.localStorage.saveCurMasterId({masterId:this.masterWalletId}).then((data)=>{
              this.native.hideLoading();
              Config.setCurMasterWalletId(this.masterWalletId);
              this.native.setRootRouter(TabsComponent);
            });
  }

}
