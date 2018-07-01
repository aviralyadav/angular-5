import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: any) {
        const arr = value.split('');
        const reversArr = arr.reverse();
        const newArr = reversArr.join('');
        return newArr;
    }
}