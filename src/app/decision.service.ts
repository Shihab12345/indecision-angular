import { EventEmitter } from "@angular/core";

export class DecisionService {
    private decisions : string[] = [];
    decisionsChanged = new EventEmitter<string[]>();
    decisionExists = new EventEmitter<void>();

    getDecisionList() {
        return this.decisions.slice();
    }

    addDecision(decision : string){
        if(!this.decisions.includes(decision)){
            this.decisions.push(decision);
            this.decisionsChanged.emit(this.decisions);
            console.log(this.decisions);
        }else{
            this.decisionExists.emit(null);
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
        if(this.decisions.length > 1){
            var randomIndex = Math.floor(Math.random() * this.decisions.length);
            return this.decisions[randomIndex];
        }else{
            return 'Please add more than one option first'
        }
    }
}