import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

class Game {
  question: string;
  choice: boolean;
}

class DecisionHelper {
  playerName: string;
  decisions: Game[] = [];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  constructor(
    private http: HttpClient, 

    @Inject('BASE_URL') private baseUrl: string ){}

  nextQuestion: string = 'Do I want a Doughnut?';
  disableBtnYes: boolean = false;
  disableBtnNo: boolean = false;
  displayResult: boolean = false;
  decisionHelper = new DecisionHelper();
  choosenPath: any = null;

  onChoicePicked(question: string, choice:boolean){
    if(question.trim() === "Do I want a Doughnut?" && choice == false){
      this.nextQuestion = "Maybe you want an Apple?"
      this.saveChoice(question, choice);
    } else if(question.trim() === "Do I want a Doughnut?" && choice == true){
      this.nextQuestion = "Do I deserve it?"
      this.saveChoice(question, choice);
    } else if(question.trim() === "Do I deserve it?" && choice == true){
      this.nextQuestion = "Are you sure?"
      this.saveChoice(question, choice);
    } else if(question.trim() === "Do I deserve it?" && choice == false){
      this.nextQuestion = "Is it a good doughnut?"
      this.saveChoice(question, choice);
    } else if(question.trim() === "Are you sure?" && choice == true){
      this.nextQuestion = "Go get it."
      this.disableBtnYes = true;
      this.disableBtnNo = true;
      this.saveChoice(question, choice);
      this.saveChoice("Go get it.", true);
      this.submitChoice();
    } else if(question.trim() === "Are you sure?" && choice == false){
      this.nextQuestion = "Do jumping jacks first."
      this.disableBtnYes = true;
      this.disableBtnNo = true;
      this.saveChoice(question, choice);
      this.saveChoice("Do jumping jacks first.", true);
      this.submitChoice();
    } else if(question.trim() === "Is it a good doughnut?" && choice == true){
      this.nextQuestion = "What are you waiting for? Grab it now."
      this.disableBtnYes = true;
      this.disableBtnNo = true;
      this.saveChoice(question, choice);
      this.saveChoice("What are you waiting for? Grab it now.", true);
      this.submitChoice();
    } else if(question.trim() === "Is it a good doughnut?" && choice == false){
      this.nextQuestion = "Wait 'till you find a sinful unforgettable doughnut."
      this.disableBtnYes = true;
      this.disableBtnNo = true;
      this.saveChoice(question, choice);
      this.saveChoice("Wait 'till you find a sinful unforgettable doughnut.", true);
      this.submitChoice();
    } else if(question.trim() === "Maybe you want an Apple?" && choice == true){
      this.disableBtnYes = true;
      this.disableBtnNo = true;
      this.saveChoice(question, choice);
      this.submitChoice();
      this.nextQuestion = "Thank you !!"
    } else if(question.trim() === "Maybe you want an Apple?" && choice == false){
      this.disableBtnYes = false;
      this.disableBtnNo = false;
      this.nextQuestion = "Do I want a Doughnut?"
    }
    console.log(question, choice);
  }

  preferredName(event: any){
    console.log(event.target.value);
    this.decisionHelper.playerName = event.target.value;
  }

  submitChoice() {
    this.displayResult = true;
    console.log(JSON.stringify(this.decisionHelper));
    const headers: HttpHeaders = new  HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'Doughnut', this.decisionHelper,{ headers: headers }).subscribe(result => {
      console.log('result',result);
      this.choosenPath = result as DecisionHelper;
    }, error => console.error(error));
  }

  saveChoice(question: string, choice:boolean){
    const isExist = this.decisionHelper.decisions.findIndex(q => q.question === question.trim()); 
      isExist === -1? this.decisionHelper.decisions.push({ question: question.trim(), choice: choice }): console.log("object already exists")
  }
}


