import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DecisionService } from '../decision.service';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild('input') input : ElementRef; 

  constructor(private decisionService : DecisionService) { }

  ngOnInit() {
  }

  onAddClick() {
    this.decisionService.addDecision(this.input.nativeElement.value);
    this.input.nativeElement.value = '';
  }

  onDecisionClick(){
    this.decisionService.decideOption();
  }

  onRemoveAllClick(){
    this.decisionService.removeAllDecisions();
  }
}
