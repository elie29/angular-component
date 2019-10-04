import { Article } from './article.model';

export class ArticlesService {
  private articles = [
    new Article('Angular 5', 'http://angular.io', 3),
    new Article('Javascript', 'http://eloquentjavascript.net', 7),
    new Article('Typescript', 'https://www.typescriptlang.org', 2)
  ];

  // For change detection purpose
  constructor() {
    for (let i = 0; i < 97; i += 1) {
      this.articles.push(
        new Article(
          'Article ' + (i + 3),
          'http://google.fr',
          Math.floor(Math.random() * 30)
        )
      );
    }
  }

  public getArticles(): Article[] {
    return this.articles;
  }

  public add(article: Article): void {
    // immutable add
    this.articles = [...this.articles, article];
  }

  public remove(article: Article): void {
    // make a copy for immutability change
    const articles = [...this.articles];
    // delete the first article found
    articles.splice(articles.indexOf(article), 1);
    // assign again articles
    this.articles = articles;
  }

  public upvote(): void {
    // immutable change of vote
    this.articles = this.articles.map(article => {
      return new Article(
        article.getTitle(),
        article.getLink(),
        article.getVotes() + 1
      );
    });
  }
}
