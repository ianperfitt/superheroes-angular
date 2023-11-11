import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";
import { AntiHeroService } from "../services/anti-hero.service";

@Injectable()
export class AntiHeroEffects {
    constructor(
        private actions$: Actions,
        private antiHeroService: AntiHeroService,
        private router: Router
    ) {}
}