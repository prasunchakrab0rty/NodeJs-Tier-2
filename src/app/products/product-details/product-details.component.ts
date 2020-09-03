import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "../products";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id");
  }
  onBack() {
    this.router.navigate(["/products"]);
  }
}
