import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GraphComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotmg';
}
