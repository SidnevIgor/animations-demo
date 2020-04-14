import { Component, Input } from '@angular/core';
import {fadeAnimation} from './zippy.animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [ fadeAnimation ]
})
export class ZippyComponent  {
  @Input('title') title: string;
  isExpanded: boolean;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
