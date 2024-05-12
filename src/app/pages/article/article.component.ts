import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../commons/components/navbar/navbar.component';
import { CopyRightsComponent } from '../../commons/components/copy-rights/copy-rights.component';
import { AvatarWriterComponent } from './commons/components/avatar-writer/avatar-writer.component';
import { CoursePreviewComponent } from '../../commons/components/course-preview/course-preview.component';
import { Course } from '../../commons/interfaces/course';

@Component({
  selector: 'app-article-content',
  standalone: true,
  imports: [
    NavbarComponent,
    AvatarWriterComponent,
    CopyRightsComponent,
    CoursePreviewComponent
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export default class ArticleContentComponent implements OnInit{
  articles: Course[] = [];

  ngOnInit(): void {
    this.articles = [
      {
        id: '12121w-343434-3',
        imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/11.jpg',
        slug: 'curs00-232',
        title: 'Diseño de páginas web con HTML5'
      },
      {
        id: '12121w-343434-3',
        imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/02.jpg',
        slug: 'curs00-232',
        title: 'Photosop para principiantes - conceptos basicos'
      },
      {
        id: '12121w-343434-3',
        imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/08.jpg',
        slug: 'curs00-232',
        title: 'Aprende PERL en 5 horas'
      }
  
    ];
  }

}
