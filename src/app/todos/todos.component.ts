import { Component } from '@angular/core';
import {trigger} from '@angular/animations';
import {transition} from '@angular/animations';
import {state} from '@angular/animations';
import {style} from '@angular/animations';
import {animate} from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade',[
      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(1000,style({opacity: 0}))
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
