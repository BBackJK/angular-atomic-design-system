import { Component, Output, Input, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Input() text: string;

  @Input() textSize: string;
  @Input() textColor: string;

  textSizeClassName: string;
  textColorClassName: string;
  
  constructor() {}

  ngOnChanges(): void {
    this.setClassName();
  }
  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.textSizeClassName = this.textSize ? 'text-size-' + this.textSize : 'text-size-default';
    this.textColorClassName = this.textColor ? 'text-color-' + this.textColor : 'text-color-dark';
  }
}