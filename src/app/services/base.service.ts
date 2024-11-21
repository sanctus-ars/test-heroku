import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://localhost:1337/api';
}


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public rootBe = environment.be_url;
  public rootUrl = `${environment.be_url}/api`;

  constructor(
    private http: HttpClient,
    private apiConfiguration: ApiConfiguration
  ) {
    console.log(this.rootBe);
  }

  get<T>(url: string, params?: any, mapObj: boolean = true): Observable<T> {
    const resultUrl = `${this.rootUrl}${url}`;
    return  this.http.get(resultUrl, {
      params: params
    }).pipe(map((x: any) => mapObj ? x['data'] : x))
  }

  put<T>(url: string,  body?: any, params?: any): Observable<T> {
    const resultUrl = `${this.rootUrl}${url}`;
    return this.http.put(resultUrl, body, {
      params: params
    }).pipe(map((x) => x as T));
  }

  delete<T>(url: string,  params?: any): Observable<T> {
    const resultUrl = `${this.rootUrl}${url}`;
    return this.http.delete(resultUrl, {
      params: params
    }).pipe(map((x) => x as T));
  }

  post<T>(url: string, body?: any, params?: any): Observable<T> {
    const resultUrl = `${this.rootUrl}${url}`;
    return this.http.post(resultUrl, body, {
      params: params
    }).pipe(map((x) => x as T));
  }

  fileUrl(url: string): string {
    return `${this.rootBe}${url}`;
  }
}
