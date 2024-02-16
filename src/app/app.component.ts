import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appTitle: string = "Nandakho's Site";
  gitLink: string = "https://github.com/nandakho/nandakho.my.id";
  public appPages = [
    { title: 'Tools of Fantasy', url: 'https://tof.nandakho.my.id', icon: 'game-controller', type: "External" },
    { title: 'Helper Star Rail', url: 'https://hsr.nandakho.my.id', icon: 'train', type: "External" },
    { title: 'Privacy Policy', url: 'privacy', icon: 'shield', type: "Internal" },
  ];
  constructor() {}
}
