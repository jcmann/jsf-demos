import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'Quiz Editor';

    quizzes = [
        {
            name: "Quiz 1", 
            showDelete: false
        },
        {
            name: "Quiz 2", 
            showDelete: false
        },
        {
            name: "Quiz 3", 
            showDelete: false 
        }
    ]; 

    addFunnyQuiz = () => {
        this.quizzes = [
        ...this.quizzes, 
            {
                name: "Funny Quiz", 
                showDelete: false,
            }
        ]; 
    }

    myNewQuizName = ""; // because typescript is typed!

    addQuiz = () => {
        this.quizzes = [
            ...this.quizzes, 
            {
                name: this.myNewQuizName, 
                showDelete: true
            }
        ]; 

        this.myNewQuizName = ""; 
    }

    deleteQuiz = (quizToDelete) => {

        this.quizzes = [
            ...this.quizzes.filter(x => x != quizToDelete)
        ]

    }

}
