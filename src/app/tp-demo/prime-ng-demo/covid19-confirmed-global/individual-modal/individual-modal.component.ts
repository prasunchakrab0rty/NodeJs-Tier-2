import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
@Component({
  selector: 'app-individual-modal',
  templateUrl: './individual-modal.component.html',
  styleUrls: ['./individual-modal.component.scss']
})
export class IndividualModalComponent implements OnInit {
  data: [];
  constructor(
    private dynamicDialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.data = this.dialogConfig.data
  }
  closeModal() {
    const data2send = {
      dummy: "DATA"
    };
    this.dynamicDialogRef.close(data2send);
  }

}
