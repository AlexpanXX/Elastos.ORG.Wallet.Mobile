import { Component, Input, OnInit, OnChanges ,SimpleChanges} from '@angular/core';
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html',
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input()
  proportion: any;//比例值
  length: any;//颜色长度


  constructor() {
    this.length = {
      'width': '0%',
      'transition': 'width 1s',
      '-webkit-transition': 'width 1s'
    }
  }

  ngOnInit() {
    this.setData();
  }

  setData(){
    //this.proportion = Math.round(this.amount / this.total * 100);
    this.proportion = this.proportion*100;
    if (this.proportion) {
      this.proportion += '%';
    } else {
      this.proportion = '0';
    }
    this.length.width = this.proportion;
    // setTimeout(() => { this.length.width = this.proportion; }
    // , 200);
  }

    /**
   * 数据变化
   */
  ngOnChanges(changes: SimpleChanges) {
    //重新更新数据
    console.log("--------Ela------"+this.proportion);
    this.setData();
  }
}
