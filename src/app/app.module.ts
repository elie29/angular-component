import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './components/root/root.component';
import { ArticlesModule } from './modules/articles/articles.module';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, ArticlesModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
