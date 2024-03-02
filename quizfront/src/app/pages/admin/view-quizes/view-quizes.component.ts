import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrl: './view-quizes.component.css'
})
export class ViewQuizesComponent implements OnInit {
quizzes=[
  {
    qId:23,
    title:'Basic Java Quiz',
    description:'OOPS LANGUAGE',
    maxMarks:'10',
    numberOfQuestions:'20',
    active:'',
    category:{
      title:'Programming'
    }
  },
  {
    qId:23,
    title:'Basic Java Quiz',
    description:'OOPS LANGUAGE',
    maxMarks:'10',
    numberOfQuestions:'20',
    active:'',category:{
      title:'Programming'
    }
  },
];
constructor(private _quiz:QuizService){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 ngOninit():void{
  this._quiz.quizzes().subscribe(
    (data:any)=>{
      this.quizzes=data;
      console.log(this.quizzes);
    },
    (error)=>{
      console.log(error);
      swal("Error ! ","Error in loading data",'erroe');
    }
  )

 }
}
