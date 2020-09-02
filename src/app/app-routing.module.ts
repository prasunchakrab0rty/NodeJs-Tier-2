import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { WelcomeComponent } from "./login/welcome/welcome.component";

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "", component: WelcomeComponent },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
