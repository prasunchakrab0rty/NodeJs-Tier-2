import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { IProduct } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product List";
  imageVisible = false;
  errorMessage = "";
  filteredProducts: IProduct[];
  products: IProduct[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (value) => {
        this.products = value;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1
    );
  }
  viewRatings(event: number) {
    this.pageTitle = `${this.pageTitle} ${event}`;
  }
  toggle_image(): void {
    this.imageVisible = !this.imageVisible;
  }
}
