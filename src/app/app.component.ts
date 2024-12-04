import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgFor, NgIf, ItemComponent]
})
export class AppComponent {
  title = 'todo';

  filter: "all" | "active" | "done" = "all"

  allItems = [
    { description: "eat", done: true},
    { description: "sleep", done: false},
    { description: "play", done: false},
    { description: "laugh", done: false}
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done :
  !item.done
  );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: { description: string; done: boolean; }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
