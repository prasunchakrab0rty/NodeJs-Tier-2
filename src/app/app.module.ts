import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { SpecialToSpacePipe } from "./shared/pipes/special-to-space.pipe";
import { WelcomeComponent } from './login/welcome/welcome.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, SpecialToSpacePipe, WelcomeComponent, ProductDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
