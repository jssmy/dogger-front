import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/components/navbar/navbar.component';
import { CopyRightsComponent } from '../../commons/components/copy-rights/copy-rights.component';
import { SearchComponent } from '../../commons/components/search/search.component';
import { NgOptimizedImage } from '@angular/common'
import { CoursePreviewComponent } from '../../commons/components/course-preview/course-preview.component';
import { HeroComponent } from './commons/components/hero/hero.component';
import { ArticlesComponent } from './commons/components/articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CopyRightsComponent,
    SearchComponent,
    CoursePreviewComponent,
    NgOptimizedImage,
    HeroComponent,
    ArticlesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  
}
