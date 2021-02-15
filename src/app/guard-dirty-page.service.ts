import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { CanNavigateAway } from './interfaces/can-navigate-away';

@Injectable({
  providedIn: 'root'
})
export class GuardDirtyPageService implements CanDeactivate<CanNavigateAway> {
  constructor() {}

  canDeactivate(
    component: CanNavigateAway,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Promise<boolean> {
    return component.canNavigateAway(nextState.url);
  }
}
