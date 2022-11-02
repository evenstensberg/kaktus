import { Component, Input, OnInit } from '@angular/core';

interface MenuItem {
  price?: string;
  category?: string;
  title?: string;
  allergies?: string;
  src?: string;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() arr: Array<MenuItem> = [];
  constructor() {}

  ngOnInit(): void {}
}
