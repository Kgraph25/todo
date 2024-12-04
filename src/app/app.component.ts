import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ItemComponent } from "./item/item.component";
import { CookieService } from 'ngx-cookie-service';


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

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    // Cookie から allItems を読み込む
    const allItemsCookie = this.cookieService.get('allItems');
    if (allItemsCookie) {
      this.allItems = JSON.parse(allItemsCookie);
    }
  }

  // allItems が変更されたら Cookie に保存する
  saveAllItemsToCookie() {
    this.cookieService.set('allItems', JSON.stringify(this.allItems));
  }


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
    this.allItems.push({ description, done: false });
    this.saveAllItemsToCookie(); // 追加後に Cookie に保存
  }

  remove(item: { description: string; done: boolean; }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
    this.saveAllItemsToCookie(); // 削除後に Cookie に保存
  }

}
