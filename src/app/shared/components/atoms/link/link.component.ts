import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit, OnChanges {

  @Input() link: string;
  @Input() isBlank: boolean;

  constructor() {}

  ngOnChanges(): void {}
  ngOnInit(): void {}
}