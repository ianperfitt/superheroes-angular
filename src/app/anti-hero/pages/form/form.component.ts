import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AntiHeroActions } from '../../state/anti-hero.actions';
import { AntiHero } from '../../models/anti-hero.interface';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { CanComponentDeactivate } from 'src/app/core/guards/form.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, CanComponentDeactivate{
  antiHero: AntiHero | null = null;
  
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }
  
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const confirmation = window.confirm('Are you sure?');
    return confirmation;
  }

  ngOnInit(): void {
  }

  formAction(data: {value: AntiHero, action: string}) {
    switch(data.action) {
      case "Create" : {
        this.store.dispatch({type:
          AntiHeroActions.ADD_ANTI_HERO_API,
          payload: data.value});
        return;
      }
      default: ""
    }
  }

}
