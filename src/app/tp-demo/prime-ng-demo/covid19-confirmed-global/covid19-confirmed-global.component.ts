import { Component, OnInit } from '@angular/core';
import { Covid19ServiceService } from './covid19-service.service';
import { DialogService } from 'primeng/api';
import { IndividualModalComponent } from './individual-modal/individual-modal.component';
@Component({
  selector: 'app-covid19-confirmed-global',
  templateUrl: './covid19-confirmed-global.component.html',
  styleUrls: ['./covid19-confirmed-global.component.scss'],
  providers: [DialogService]
})
export class Covid19ConfirmedGlobalComponent implements OnInit {
  regions: [];
  loading: boolean = true;
  constructor(private cservice: Covid19ServiceService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.cservice.getData().then(res => {
      this.regions = res;
      this.loading = false;
    })
  }
  show(region) {
    const ref = this.dialogService.open(IndividualModalComponent, {
      data: { region },
      header: 'Covid-19 Details',
      width: '450px',
      contentStyle: { 'max-height': '450px', overflow: 'auto' }
    });
    ref.onClose.subscribe((data?: any) => {
      if (data) {
        console.log(data)
      } else {
        console.log('The popup was closed');
      }
    });
  }

}
