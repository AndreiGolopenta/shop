import { Filters, Category } from 'src/app/models/filters.interface';

export class UtilityFunctions {
  static createQueryParams(
    category: string,
    filters: Filters,
    sortBy: string
  ): string {
    let data: string[] = [];
    for (let prop in filters) {
      filters[prop].forEach((value: Category) => {
        value.checked
          ? (data = [...data, `${prop}=${encodeURIComponent(value.name)}`])
          : null;
      });
    }
    switch (sortBy) {
      case 'Popularity': {
        break;
      }
      case 'Price Ascending': {
        data = [...data, 'price=asc'];
        break;
      }
      case 'Price Descending': {
        data = [...data, 'price=desc'];
        break;
      }
    }

    if (data.length) {
      return `?category=${encodeURIComponent(category)}&${data.join('&')}`;
    } else {
      return `?category=${encodeURIComponent(category)}`;
    }
  }

  static createQueryParamsHomePage(data: string[]): string {
    const query = data.map((value: string) => {
      const key = value.split(' ').join('').replace('&', '');
      return `${key.charAt(0).toLowerCase()}${key.substring(1)}=${encodeURIComponent(value)}`;
    });
    return query.join('&');
  }
}