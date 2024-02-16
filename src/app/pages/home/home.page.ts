import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menus: menu[] = [
    {
      title: "Tools of Fantasy",
      summary: "Tower of Fantasy's Tool",
      description: "Collection of simple tools to help you in your journey in Tower of Fantasy!",
      url: "https://tof.nandakho.my.id",
      background: "assets/background/tof.jpg",
    },
    {
      title: "Helper Star Rail",
      summary: "Honkai - Star Rail's Tool",
      description: "Collection of simple tools to help you in Honkai - Star Rail!",
      url: "https://hsr.nandakho.my.id",
      background: "assets/background/hsr.jpg",
    },
  ];

  constructor(
    private nav: NavController
  ) {}

  async goTo(url:any){
    if(url.startsWith("https://")||url.startsWith("http://")){
      window.open(url, '_blank');
    } else {
      await this.nav.navigateRoot(url);
    }
  }
}

interface menu {
  title: string;
  background?: string;
  summary?: string;
  description?: string;
  url?: string;
}