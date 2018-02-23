import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content = '![image](https://media.giphy.com/media/y9Tia8PxQMlhK/giphy.gif)';
  preRenderFunc = '';
  mode = '';
  options = '';
}
