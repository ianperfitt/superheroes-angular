import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AntiHero } from '../../models/interface';
import { TableActions } from '../../enums/table-actions.enums';

//Anti-Hero presentation component

@Component({
  selector: 'app-anti-hero-list',
  templateUrl: './anti-hero-list.component.html',
  styleUrls: ['./anti-hero-list.component.scss']
})
export class AntiHeroListComponent implements OnInit{

  @Input() headers: Array<{headerName: string, fieldName: keyof AntiHero}> = [];
  @Input() antiHeroes: Array<AntiHero> = [];
  @Output() antiHero = new EventEmitter();
  headerFields: string[] = [];

  ngOnInit(): void {
    this.getHeaderFields();
  }
  getHeaderFields() {
    this.headerFields = this.headers.map((data) =>
    data.fieldName);
    this.headerFields.push("actions");
  }
selectAntiHero(antiHero: AntiHero, action: TableActions) {
  this.antiHero.emit({antiHero,action});
}
}
