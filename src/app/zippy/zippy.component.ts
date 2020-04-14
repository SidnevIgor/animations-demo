import { Component, Input } from '@angular/core';
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
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('fade',[
      state('notexpanded',style({height: 0,overflow:'hidden',paddingTop: 0, paddingBottom: 0, opacity: 0})),
      transition('notexpanded => expanded',[
        animate("500ms", style({height: '*',overflow: 'auto', paddingTop: '*'})),
        animate("1s", style({opacity: 1}))
      ]),
      transition('expanded => notexpanded',[animate(500)])
    ])
  ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
