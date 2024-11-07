import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], query: string, fields: string): any[] {
    if (!query) return items;
    const lowerCaseQuery = query.toLowerCase();
    return items.filter(item =>
      fields.split(',').some(field => item[field.trim()].toLowerCase().includes(lowerCaseQuery))
    );
  }
}
