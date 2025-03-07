import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  template: `
    <div class="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-zinc-950 text-pink-950 shadow-lg text-3xl">
        <a routerLink="/"><img src="https://realmshop.info/wp-content/uploads/2019/01/56.png" /></a>
    </div>
  `,
  styles: ``
})

export class SidebarComponent {

}
