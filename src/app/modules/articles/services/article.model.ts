export class Article {
  constructor(private title: string, private link: string, private votes = 0) {}

  getTitle(): string {
    console.log(this.title); // in order to observe change detection effects
    return this.title;
  }

  getMeta(): string {
    return this.link.replace(/^(https?):\/\//, '').split('/')[0];
  }

  getLink(): string {
    return this.link;
  }

  getVotes(): number {
    return this.votes;
  }

  upvote(): void {
    this.votes++;
  }

  downvote(): void {
    this.votes--;
  }
}
