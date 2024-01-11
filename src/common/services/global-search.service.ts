import { Injectable } from '@angular/core';
import { AppHttpClient } from '@common/core/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalSearchService {
  constructor(private http: AppHttpClient) {}

  public searchSchools(query: string) {
    return this.http.get<{
      data: {
        universities: any[];
      };
    }>('search/university', { q: query });
  }

  public searchDepartments(query: string) {
    return this.http.get<{
      data: {
        departments: any[];
      };
    }>('search/department', { q: query });
  }
}
