import { Component } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [62, 83, 466, 965, 982, 1043, 738].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );
  interval = 2000;
  pauseOnHover = true;
  pauseOnFocus = true;
  faPlayCircle = faPlayCircle;
}
