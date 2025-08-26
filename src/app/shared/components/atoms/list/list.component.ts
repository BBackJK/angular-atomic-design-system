import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: any[];
  @Input() horizontal: boolean = false;

  @Output() event = new EventEmitter();

  constructor() {}

  alignClassName: string;


  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.alignClassName = this.horizontal ? 'list-horizontal' : '';
  }

  onClick(listItem: any): void {
    this.event.emit(listItem);
  }
}
