import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardDirtyPageService } from '../guard-dirty-page.service';

import { ChildPage } from './child.page';

const routes: Routes = [
  {
    path: '',
    component: ChildPage,
    canDeactivate: [GuardDirtyPageService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildPageRoutingModule {}
