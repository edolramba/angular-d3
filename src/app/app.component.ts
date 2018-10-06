import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../app/data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  data: Observable<DataModel>;

  constructor(private http: HttpClient) { 
    this.data = this.http.get<DataModel>('/assets/data.json');
  }
}