import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { Item } from '../item';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-item',
  imports: [NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() save = new EventEmitter<void>();
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
    this.save.emit();
  }

  appComponent: AppComponent;

  constructor(appComponent:AppComponent) {
    this.appComponent = appComponent
  }

  toggleDone() {
    this.item.done = !this.item.done;
    this.appComponent.saveAllItemsToCookie();
  }
}

