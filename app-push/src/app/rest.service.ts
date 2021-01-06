import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public guardarEnviar(data: any): any {
    return this.http.post(`http://localhost:9000/api/guardar`, {
      data: data
    })
  }
}
