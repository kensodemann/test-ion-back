import { Component, OnInit } from '@angular/core';
import { AppUrlOpen, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const { App } = Plugins;
    App.addListener('backButton', (data: AppUrlOpen) => console.log('back button handler', data));
  }
}
