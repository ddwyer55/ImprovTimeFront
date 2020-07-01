import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  URL(): string{
      return 'http://localhost:8080/ImprovTime/'
  }
}
