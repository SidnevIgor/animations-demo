import { Component } from '@angular/core';
import {animationExp} from '../animation/animation';
import {useAnimation} from '@angular/animations';
import {animation} from '@angular/animations';
import {trigger} from '@angular/animations';
import {transition} from '@angular/animations';
import {state} from '@angular/animations';
import {style} from '@angular/animations';
import {animate} from '@angular/animations';
import {keyframes} from '@angular/animations';
import {query} from '@angular/animations';
import {animateChild} from '@angular/animations';
import {group} from '@angular/animations';
import {stagger} from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation',[
      transition('void => *',[
        group([
          query('h1',[ style({transform:"translateY(-20px)"}),animate(1000)]),
          query('@fade', stagger('500ms',animateChild()))
        ])
    ])
  ]),

    trigger('fade',[
      transition('void => *', [
        useAnimation(animationExp,{
          params:{
            duration: '1000ms'
          }
        })
      ]),
      transition('* => void', [
        animate("1000ms ease-in", keyframes([
          style({offset: .2, opacity: 1, transform: "translateX(20px)"}),
          style({offset: 1, opacity: 0, transform: "translateX(-100%)"})
          ])
        )
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
  animeStart(event){console.log(event)}
  animeEnd(event){console.log(event)}
}
