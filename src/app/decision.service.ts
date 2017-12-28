import { EventEmitter } from "@angular/core";

export class DecisionService {
    private decisions : string[] = [];
    decisionsChanged = new EventEmitter<string[]>();

    getDecisionList() {
        return this.decisions.slice();
    }

    addDecision(decision : string){
        if(!this.decisions.includes(decision)){
            this.decisions.push(decision);
            this.decisionsChanged.emit(this.decisions);
            console.log(this.decisions);
        }else{
            console.log('This decision already exists!');
        }
    }

    removeDecision(decisionIndex : number){
        this.decisions.splice(decisionIndex, 1);
        this.decisionsChanged.emit(this.decisions);
    }

    removeAllDecisions(){
        this.decisions = [];
        this.decisionsChanged.emit(this.decisions);
        console.log(this.decisions);
    }

    decideOption() {
        var randomIndex = Math.floor(Math.random() * this.decisions.length);
        alert(this.decisions[randomIndex]);
    }
}