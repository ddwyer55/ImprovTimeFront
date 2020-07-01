import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Suggestion } from './classes/suggestion';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http:HttpClient, private urlserv:UrlService) { }
  retrieveSuggestion():Observable<Suggestion>{
    return this.http.get(this.urlserv.URL()).pipe(
      map(resp=>resp as Suggestion)
    )
  }
}
