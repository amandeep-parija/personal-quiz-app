import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../Services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  currentQuestion: any;

  constructor(
    public quizservice: QuizService,
    private router: Router
  ){}


  ngOnInit(): void {
      this.loadCurrentquestion();
  }

  loadCurrentquestion(){
    this.currentQuestion = this.quizservice.getCurrentQuestion();
  }

  selectOption(type: string){
    this.quizservice.selectAnswer(type);


    if(this.quizservice.isQuizFinished()){
      this.router.navigate(['/result']);
    } else{
      this.loadCurrentquestion();
    }

  }
}
