import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa-appinsights-tests';

  ngOnInit(): void {
    setTimeout(() => console.log('Greetings from Component'), 30000);
  }
}
