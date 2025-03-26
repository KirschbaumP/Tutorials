import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = 'not loaded';

  constructor(private readonly httpClient: HttpClient) {
  }

  loadData() {
    this.data = 'loading...';
    this.httpClient.get('/api/get').subscribe((x) => {
      this.data = JSON.stringify(x);
    });
  }
}
