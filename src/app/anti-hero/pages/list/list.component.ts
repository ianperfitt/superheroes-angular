import { Component, OnInit } from '@angular/core';
import { AntiHero } from '../../models/anti-hero.interface';
import { TableActions } from '../../enums/table-actions.enum';
import { Router } from '@angular/router';
import { CommandBarActions } from '../../enums/command-bar-actions.enum';
import { selectAntiHeroes } from '../../state/anti-hero.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { AntiHeroActions } from '../../state/anti-hero.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  antiHeroes: ReadonlyArray<AntiHero> = [];
  antiHeroes$ = this.store.select(selectAntiHeroes());

  headers: {headerName: string, fieldName: keyof AntiHero}[] = [
    {headerName: "First Name", fieldName: "firstName"},
    {headerName: "Last Name", fieldName: "lastName"},
    {headerName: "House", fieldName: "house"},
    {headerName: "Known As", fieldName: "knownAs"},
  ]

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch({type: AntiHeroActions.GET_ANTI_HERO_LIST});
    this.assignAntiHeroes();
  }

  assignAntiHeroes() {
    this.antiHeroes$.subscribe((data: readonly AntiHero[]) => {
      this.antiHeroes = data;
    });
  }

  selectAntiHero(data: {antiHero: AntiHero, action: TableActions}) {
    switch(data.action) {
      case TableActions.View: {
        this.router.navigate(['anti-heroes', 'form', data.antiHero.id]);
        return;
      }
      case TableActions.Delete: {
        this.store.dispatch({type:
          AntiHeroActions.REMOVE_ANTI_HERO_STATE,
          antiHeroId: data.antiHero.id});
        return;
      }
      default: ""
    }
  }

  executeCommandBarAction(action: CommandBarActions) {
    switch(action) {
      case CommandBarActions.Create: {
        this.router.navigate(["anti-heroes", "form"]);
        return;
      }
      case CommandBarActions.DeleteAll: {
        return;

      }
      default: ""

    }
  }
}
