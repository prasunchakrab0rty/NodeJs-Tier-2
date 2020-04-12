import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Covid19ConfirmedGlobalComponent } from './prime-ng-demo/covid19-confirmed-global/covid19-confirmed-global.component';
import { IndividualModalComponent } from './prime-ng-demo/covid19-confirmed-global/individual-modal/individual-modal.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from "@angular/common/http";
import { DialogService } from 'primeng/api';

@NgModule({
  declarations: [Covid19ConfirmedGlobalComponent, IndividualModalComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule
  ],
  providers: [
    DialogService
  ],
  entryComponents: [IndividualModalComponent]
})
export class TPDemoModule { }
