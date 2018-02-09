import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App for sure yes  or no !!!';

  sayHello(name: string) {
    return 'howdee doo' + name;
  }

}
