import { Component, OnInit } from '@angular/core';
import {BaseComponent} from './../../../app/BaseComponent';
import {Config} from '../../../providers/Config';
import { Util } from '../../../providers/Util';

@Component({
  selector: 'app-recordinfo',
  templateUrl: './recordinfo.component.html',
  // styleUrls: ['./recordinfo.component.scss']
})
export class RecordinfoComponent extends BaseComponent implements OnInit {

  transactionRecord: any = {};

  start = 0;

  blockchain_url = Config.BLOCKCHAIN_URL;

  ngOnInit() {
    this.setTitleByAssets('text-record');
    let txId = this.getNavParams().get("txId");
    let chainId = this.getNavParams().get("chainId");
    this.walletManager.getAllTransaction(chainId, this.start, txId, (data) => {
      let allTransaction = data['allTransaction'];
      let transactions = JSON.parse(allTransaction)['Transactions'];
      // alert("getAllTransaction" + JSON.stringify(transactions));
      let transaction = transactions[0];
      let timestamp = transaction['Timestamp']*1000;
      let datetime = Util.dateFormat(new Date(timestamp));
      let summary = transaction['Summary'];
      this.transactionRecord = {
        name: chainId,
        status: summary["Status"],
        balance: summary["Amount"],
        txId: txId,
        receiveAddress: summary["ToAddress"],
        transactionTime: datetime,
        payfees: transaction['Fee'],
        confirmCount: summary["ConfirmStatus"],
        remark: summary["Remark"],
        type: summary["Type"]
      }
    });
  }  

}
