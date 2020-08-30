import { Injectable } from "@angular/core";
import { IProduct } from "../products/products";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  productUrl = "api/products/products.json";

  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log("Data Fetched Successfully")),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // Client Side or Network Error
      errorMessage = `Error: ${err.error.message}`;
    } else {
      // The backend returned an unseccessful response code
      errorMessage = `Server Returned: ${err.status} with message: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
