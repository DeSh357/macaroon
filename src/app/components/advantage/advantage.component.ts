import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.less']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() advantageNumber: number;

  constructor() {
    this.advantageNumber = 0;
    this.advantage = {
      title: '',
      text: ''
    }
  }

  ngOnInit(): void {
  }

}
