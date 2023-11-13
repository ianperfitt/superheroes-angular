import { createAction, props } from "@ngrx/store";
import { AntiHero } from "../models/anti-hero.interface";


export enum AntiHeroActions {
  GET_ANTI_HERO_LIST = '[Anti-Hero] Get Anti-Hero list',
  SET_ANTI_HERO_LIST = '[Anti-Hero] Set Anti-Hero list',
  REMOVE_ANTI_HERO_STATE = '[Anti-Hero] Remove ALL Anti-Hero (STATE)',
  REMOVE_ALL_ANTI_HERO_API = "REMOVE_ALL_ANTI_HERO_API"
}

export const removeAntiHeroState = createAction(
    AntiHeroActions.REMOVE_ANTI_HERO_STATE,
    props<{ antiHeroId: string}>()
);

export const getAntiHeroList = createAction(
    AntiHeroActions.GET_ANTI_HERO_LIST,
);

export const setAntiHeroList = createAction(
    AntiHeroActions.SET_ANTI_HERO_LIST,
    props<{ antiHeroes: ReadonlyArray<AntiHero> }>()
)