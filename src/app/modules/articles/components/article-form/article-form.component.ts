import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // better to have it even no inputs here
})
export class ArticleFormComponent implements OnInit {
  @Output() addedArticle = new EventEmitter<{ title: string; link: string }>();

  @ViewChild('title', { static: true }) title: ElementRef;
  @ViewChild('link', { static: false }) link: ElementRef;

  ngOnInit(): void {
    console.log('static true: title is available', this.title);
    console.log(
      'static false: link is available in ngAfterViewInit',
      this.link
    );
  }

  addArticle(title: string, link: string): void {
    if (title && link) {
      this.addedArticle.emit({ title, link });
      this.title.nativeElement.value = '';
      this.link.nativeElement.value = '';
    }
  }
}
