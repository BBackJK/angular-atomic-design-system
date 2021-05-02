import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() link: string;
  @Input() icon: string;
  @Input() size: string;
  @Input() type: string;
  @Input() display: string;

  @Output() event = new EventEmitter();

  iconClassName: string;
  sizeClassName: string;
  typeClassName: string;
  displayClassName: string;

  constructor() {}

  ngOnInit(): void {
    this.setClassName();
  }

  ngOnChanges(): void {
    this.setClassName();
  }

  setClassName(): void {
    switch (this.icon) {
      default:
        this.iconClassName = null;
        break;
    }

    this.sizeClassName = this.size ? ('btn-size-' + this.size) : 'btn-size-md';
    this.typeClassName = this.type ? ('btn-type-' + this.type) : 'btn-type-base';
    this.displayClassName = this.display ? ('btn-display-' + this.display) : 'btn-display-flat';
  }

  onClick(): void {
    this.event.emit();
  }
}
