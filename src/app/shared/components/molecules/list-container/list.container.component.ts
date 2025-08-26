import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list.container.component.html',
  styleUrls: ['./list.container.component.scss']
})
export class ListContainerComponent implements OnInit {

  @Input() list: any[];
  @Input() horizontal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  testClick(data): void {
    console.log(data);
  }
}