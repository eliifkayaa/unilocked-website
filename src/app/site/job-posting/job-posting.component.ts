import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent {
  vegetables: Vegetable[] = [
    {name: 'UI Designer'},
    {name: 'remote'},
    {name: 'Software Engineer'},
    {name: 'Senior Software Engineer'},
    {name: 'Türkiye'},
    {name: 'Staj'},
    {name: 'Java'},
    {name: 'C (Programlama Dili)'},
    {name: 'Figma'},
  ];
  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
export interface Vegetable {
  name: string;
}

