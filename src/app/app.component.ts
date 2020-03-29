import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles : [`
    h3 {
      color: orange;
    }
  `]
})
export class AppComponent {
  title = 'first-app';
  userName = 'Hamza ouni';

  isUserNameEmpty() : boolean {
    if(this.userName.length ==  0)
      return true;
    else return false;

  }

  resetUsername() {
    this.userName = '';
  }
}
