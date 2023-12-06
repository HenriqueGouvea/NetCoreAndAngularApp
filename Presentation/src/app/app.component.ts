import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Presentation';
  products: IProduct[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get('https://localhost:7043/api/products').subscribe({
        next: (response) => { this.products = (response as IPagination).data },
        error: (error) => { console.log(error) }
      });
  }
}
