import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from './features/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carbon-compass';
}
