import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-homepage';
  faLinkedin = faLinkedin;
}
