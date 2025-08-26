import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {}

  testList: string[] = ['one', 'two', 'three', 'forth'];

  ngOnInit(): void {};

  goDetail(data): void {
    console.log(data);
  }
}
