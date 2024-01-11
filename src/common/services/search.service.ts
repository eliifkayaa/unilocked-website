import { Injectable } from '@angular/core';
import { AppHttpClient } from '@common/core/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: AppHttpClient) {}

  public global(query: string) {
    return this.http.get<any>('search/global', { q: query });
  }
}
