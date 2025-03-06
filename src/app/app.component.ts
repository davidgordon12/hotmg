import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphComponent } from "./graph/graph.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GraphComponent, SidebarComponent],
  template: `
  <app-sidebar />
  <router-outlet />
  ` ,
  styles: ``,
})
export class AppComponent { }
