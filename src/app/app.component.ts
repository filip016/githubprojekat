import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogComponent } from "./log/log.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logovanje';
}
