import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StarRatingComponent } from "./components/star-rating/star-rating.component";
import { SpecialToSpacePipe } from "./pipes/special-to-space.pipe";

@NgModule({
  declarations: [StarRatingComponent, SpecialToSpacePipe],
  imports: [CommonModule],
  exports: [StarRatingComponent, SpecialToSpacePipe, CommonModule, FormsModule],
})
export class SharedModule {}
