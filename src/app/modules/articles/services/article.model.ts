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

  changeVote(vote: 1 | -1): Article {
    return new Article(this.title, this.link, this.votes + vote);
  }
}
