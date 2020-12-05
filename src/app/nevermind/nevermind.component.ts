import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nevermind',
  templateUrl: './nevermind.component.html',
  styleUrls: ['./nevermind.component.css']
})
export class NevermindComponent implements OnInit {
  visibility = true;

  toggle(): void {
    this.visibility = !this.visibility;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
