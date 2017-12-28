import { Component, OnInit, Input } from '@angular/core';
import { DecisionService } from '../decision.service';

@Component({
  selector: 'app-decision-element',
  templateUrl: './decision-element.component.html',
  styleUrls: ['./decision-element.component.css']
})
export class DecisionElementComponent implements OnInit {
  @Input() public decisionText : string;
  @Input() public decisionIndex : number;
  constructor(private decisionService : DecisionService) { }

  ngOnInit() {
  }

  onElementRemove(){
    this.decisionService.removeDecision(this.decisionIndex);
  }
}
