import { Component } from '@angular/core';


@Component({
  selector: 'app-graph',
  template: `
  <div class="ml-24 bg-zinc-900 w-screen h-28">
    <i class="mt-6 text-3xl tracking-widest text-zinc-100 font-bold p-6">Att: </i>
    <input type="number" class="mt-6 p-1 text-zinc-300 text-2xl w-16 mr-40 border-b-4 border-zinc-100">
    <i class="mt-6 text-3xl tracking-widest text-zinc-100 font-bold p-6">Dex: </i>
    <input type="number" class="mt-6 p-1 text-zinc-300 text-2xl w-16 mr-40 border-b-4 border-zinc-100">
    <i class="mt-6 text-3xl tracking-widest text-zinc-100 font-bold p-6">DMG: </i>
    <input pattern="^[1-9]\d{0,2}(?:-[1-9]\d{0,2})?$" class="mt-6 p-1 text-zinc-300 text-2xl w-16 mr-40 border-b-4 border-zinc-100">
    <button class="mt-6 p-1 font-bold italic text-zinc-300 text-3xl">Go</button>
  </div>
  <div class="h-screen w-screen bg-zinc-800">
  </div>
`,
  styles: ``
})
export class GraphComponent {
  dmg: number = 0;
  dex: number = 0;
  att: number = 0;

  dps: number = (this.dmg + this.att) * (this.dex / 100)
}
