import { Component, OnInit } from '@angular/core';
import {BaseComponent} from './../../../app/BaseComponent';
import {ManagerComponent} from "../../wallet/manager/manager.component";
import {ContactListComponent} from "../../contacts/contact-list/contact-list.component";
import {SettingsComponent} from "../../universal/settings/settings.component";
import {AboutComponent} from "../../other/about/about.component";
import {HelpComponent} from "../../other/help/help.component";
import {NoticeComponent} from "../../other/notice/notice.component";
import {IdLauncherComponent} from "../../id/launcher/launcher";
@Component({
  selector: 'app-my',
  templateUrl: 'my.component.html',
})
export class MyComponent  extends BaseComponent implements OnInit  {


  ngOnInit() {
    this.setTitleByAssets("tab-my");
  }

  onNext(type): void {
     switch (type){
       case 0:
         this.Go(ManagerComponent);
         break;
       case 1:
         this.Go(NoticeComponent);
         break;
       case 2:
         this.Go(ContactListComponent);
         break;
       case 3:
         this.Go(SettingsComponent);
         break;
       case 4:
         this.Go(AboutComponent);
         break;
       case 5:
         this.Go(HelpComponent);
         break;
       case 6:
         this.Go(IdLauncherComponent);
         break;
     }
   }

}
