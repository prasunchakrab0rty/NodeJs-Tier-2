import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.css"],
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number;
  @Output() viewRatings: EventEmitter<number> = new EventEmitter();
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  onClick() {
    this.viewRatings.emit(this.rating);
  }
}
