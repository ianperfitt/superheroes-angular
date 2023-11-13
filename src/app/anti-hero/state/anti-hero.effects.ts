import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AntiHeroService } from "../services/anti-hero.service";
import { AntiHeroActions } from "./anti-hero.actions";
import { EMPTY, catchError, map, mergeMap } from "rxjs";

@Injectable()
export class AntiHeroEffects {

    getAntiHeroes$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AntiHeroActions.GET_ANTI_HERO_LIST),
            mergeMap(() => this.antiHeroService.getAntiHeroes()
            .pipe(
                map(antiHeroes => ({ type: AntiHeroActions.SET_ANTI_HERO_LIST, antiHeroes})),
                catchError(() => EMPTY)
            ))
        )
    }, {dispatch: true});
    
    removeAntiHero$  = createEffect(()  => {
        return this.actions$.pipe(
            ofType(AntiHeroActions.REMOVE_ANTI_HERO_API),
            mergeMap((data: { payload: string}) =>
                this.antiHeroService.deleteAntiHero(data.payload)
                .pipe(
                    map(() => ({type:
                        AntiHeroActions.REMOVE_ANTI_HERO_STATE,
                        antiHeroId: data.payload })),
                    catchError(() => EMPTY)
                ))
            )
        }, {dispatch: true}
    );


    constructor(
        private actions$: Actions,
        private antiHeroService: AntiHeroService,
        private router: Router
    ) {}
}