import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { PathConstants } from '../helpers/path-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public login(body) {
    const headers = {};
    const url = PathConstants.getPath(PathConstants.LOGIN);
    return this.httpClient.post(url, body, {
      headers,
    }).pipe();
  }

}
