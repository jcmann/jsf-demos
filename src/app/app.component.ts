import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz Editor';

  addFunnyQuiz = () => {
      this.quizzes = [
          ...this.quizzes, 
          {
              name: "Funny Quiz", 
              showDelete: false,
          }
      ]; 
  }

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
}
