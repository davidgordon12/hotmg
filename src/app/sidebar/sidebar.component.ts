import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  template: `
    <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-green-200 text-pink-950 shadow-lg text-3xl">
        <a routerLink="/">Graph</a>
        <a routerLink="/fake">NotExisting</a>
    </div>
  `,
  styles: ``
})

export class SidebarComponent {

}
