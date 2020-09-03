import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { WelcomeComponent } from "./login/welcome/welcome.component";
import { ProductDetailsGuard } from "./shared/guards/product-details.guard";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  {
    path: "products/:id",
    canActivate: [ProductDetailsGuard],
    component: ProductDetailsComponent,
  },
  { path: "", component: WelcomeComponent },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
