import {BaseComponent} from '../../app/BaseComponent';
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Config } from '../../providers/Config';
import { Util } from '../../providers/Util';
import {TransferComponent} from "./transfer/transfer.component";
import {CoinSelectComponent} from "./coin-select/coin-select.component";
import {WithdrawComponent} from "./withdraw/withdraw.component";
import {ReceiveComponent} from "./receive/receive.component";
import {RecordinfoComponent} from "./recordinfo/recordinfo.component";


@Component({
  selector: 'coin',
  templateUrl: './coin.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CoinComponent extends BaseComponent implements OnInit {


  transferList = [];

  coinCount = 0;

  coinId = 0;

  coinName = "";

  start = 0;

  count = Config.LIST_COUNT;

  textShow = '';

  elaPer:any;
  idChainPer:any;

  ngOnInit() {
    this.setLeftIcon("",()=>{
      this.events.publish("home:update");
      this.Back();
    });
    this.coinName = this.getNavParams().get("name");
    this.elaPer = this.getNavParams().get("elaPer") || 0;
    this.idChainPer = this.getNavParams().get("idChainPer") || 0;
    this.setTitle(this.coinName);
    if (this.coinName == 'ELA') {
      this.textShow = 'text-recharge';
    }else{
      this.textShow = 'text-withdraw';
    }
    this.initData();
  }

  initData(){
    this.walletManager.getBalance(this.coinName, (data)=>{
      this.coinCount = data.balance/Config.SELA;
    });
    this.walletManager.getAllTransaction(this.coinName, this.start, '', (data) => {
      // alert("getAllTransaction" + JSON.stringify(data));
      let allTransaction = data['allTransaction'];
      let transactions = JSON.parse(allTransaction)['Transactions'];
      // alert("getAllTransaction" + JSON.stringify(transactions));
      for (let key in transactions) {
        let transaction = transactions[key];
        let timestamp = transaction['Timestamp']*1000;
        // alert(timestamp)
        let datetime = Util.dateFormat(new Date(timestamp));
        let txId = transaction['TxHash'];
        let summary = transaction['Summary'];
        // alert("getAllTransaction" + JSON.stringify(summary));
        let incomingAmount = summary["Incoming"]['Amount'];
        let outcomingAmount = summary["Outcoming"]['Amount'];
        let balanceResult = incomingAmount - outcomingAmount;
        let status = '';
        switch(summary["Status"])
        {
          case 'Confirmed':
            status = 'Confirmed'
            break;
          case 'Pending':
            status = 'Pending'
            break;
          case 'Unconfirmed':
            status = 'Unconfirmed'
            break;
        }
        let transfer = {
          "name": this.coinName,
          "status": status,
          "type": summary["Type"],
          "balance": balanceResult/Config.SELA,
          "datetime": datetime,
          "timestamp": timestamp,
          "txId": txId
        }
        this.transferList.push(transfer);
      }
    });
  }

  onItem(item) {
    this.Go(RecordinfoComponent, {chainId: this.coinName, txId: item.txId});
  }

  onNext(type) {
    switch (type) {
      case 1:
        this.Go(ReceiveComponent, {id: this.coinId, chianId: this.coinName});
        break;
      case 2:
      if (this.coinName == 'ELA') {
        if(this.elaPer != 1){
          this.messageBox("text-ela-per-message");
          return;
        }
        this.Go(TransferComponent, {id: this.coinId, chianId: this.coinName});
      }else{
        if(this.idChainPer != 1){
          this.messageBox("text-ela-per-message");
          return;
        }
        this.Go(TransferComponent, {id: this.coinId, chianId: this.coinName});
      }

        break;
      case 3:
        if (this.coinName == 'ELA') {
          if(this.elaPer != 1){
            this.messageBox("text-ela-per-message");
            return;
          }
          this.Go(CoinSelectComponent, {chianId: this.coinName});
        }else{
          if(this.idChainPer != 1){
            this.messageBox("text-ela-per-message");
            return;
          }
          this.Go(WithdrawComponent, {chianId: this.coinName});
        }
        break;
    }
  }


}
