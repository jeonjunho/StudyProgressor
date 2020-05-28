import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mainSubjectVO: any[] = [
    {name: "Computer"},
    {name: "English"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public clickEvent(param: string): void {
    alert(param);
  }
}
