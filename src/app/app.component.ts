import { Component } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  showPresent: boolean = true;
  phone: string = '+375 (29) 368-98-68';
  instagram: string = 'https://www.instagram.com/';
  inputValue: string = '';

  advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  products: ProductType[] = [
    {
      image: 'product1.png',
      title: 'Макарун с малиной',
      count: 1,
      price: '1,70',
    },
    {
      image: 'product2.png',
      title: 'Макарун с манго',
      count: 1,
      price: '1,70',
    },
    {
      image: 'product3.png',
      title: 'Пирог с ванилью',
      count: 1,
      price: '1,70',
    },
    {
      image: 'product4.png',
      title: 'Пирог с фисташками',
      count: 1,
      price: '1,70',
    },
  ];

  scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: 'smooth'});
  }

  addToCart(title: string, target: HTMLElement) {
    this.scrollTo(target);
    this.inputValue = title.toUpperCase();
  }
}
