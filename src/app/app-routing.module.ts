import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Covid19ConfirmedGlobalComponent } from './tp-demo/prime-ng-demo/covid19-confirmed-global/covid19-confirmed-global.component';


const routes: Routes = [{
  path: 'demo', component: Covid19ConfirmedGlobalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
