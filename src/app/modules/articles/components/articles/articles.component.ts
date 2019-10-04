import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles = [
    {
      title: 'Angular 5',
      meta: 'angular.io',
      href: 'http://angular.io',
      points: 5
    },
    {
      title: 'Javascript',
      meta: 'eloquentjavascript.net',
      href: 'http://eloquentjavascript.net',
      points: 9
    },
    {
      title: 'Typescript',
      meta: 'typescriptlang.org',
      href: 'https://www.typescriptlang.org',
      points: 3
    }
  ];

  /**
   * Destructuring event into title and link. link is renamed href
   */
  onAddedArticle({ title, link: href }: { title: string; link: string }): void {
    this.articles.push({
      title,
      meta: href.replace(/^(https?):\/\//, '').split('/')[0],
      href,
      points: 0
    });
  }
}
