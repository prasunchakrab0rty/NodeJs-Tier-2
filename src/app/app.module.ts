import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./login/welcome/welcome.component";
import { ProductModule } from "./products/product.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: WelcomeComponent },
      { path: "**", component: WelcomeComponent },
    ]),
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
