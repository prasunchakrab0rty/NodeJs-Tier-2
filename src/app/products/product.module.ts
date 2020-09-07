import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list/product-list.component";
import { SpecialToSpacePipe } from "../shared/pipes/special-to-space.pipe";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { StarRatingComponent } from "../shared/components/star-rating/star-rating.component";
import { ProductDetailsGuard } from "../shared/guards/product-details.guard";

@NgModule({
  declarations: [
    ProductListComponent,
    SpecialToSpacePipe,
    ProductDetailsComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent,
      },
    ]),
  ],
})
export class ProductModule {}
