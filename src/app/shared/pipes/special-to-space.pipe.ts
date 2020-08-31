import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "specialToSpace",
})
export class SpecialToSpacePipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    const char: string = args[0];
    return value.replace(char, " ");
  }
}
