import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../commons/components/navbar/navbar.component';
import { CopyRightsComponent } from '../../commons/components/copy-rights/copy-rights.component';
import { AvatarWriterComponent } from './commons/components/avatar-writer/avatar-writer.component';
import { CoursePreviewComponent } from '../../commons/components/course-preview/course-preview.component';
import { Course } from '../../commons/interfaces/course';
import { ScreenLoaderService } from '../../commons/services/screen-loader.service';


@Component({
  selector: 'app-article',
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
export default class ArticleComponent implements OnInit, AfterViewChecked {
  articles: Course[] = [];

  constructor(
    private readonly loader: ScreenLoaderService
  ) {
    this.loader.start();
  }

  ngOnInit(): void {
    this.articles = [
      {
        id: '12121w-343434-3',
        imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/12.jpg',
        slug: 'curs00-232',
        title: 'Aprende CSS3 desde cero hasta experto',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        consequuntur suscipit, officia ut culpa provident reprehenderit mollitia harum minima veritatis
        officiis sit dolor tempore voluptate nobis corporis ipsam animi fugit.`
      },
      {
        id: '12121w-343434-3',
        imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/09.jpg',
        slug: 'curs00-232',
        title: 'Programacion orientado a objetos con javascript',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        consequuntur suscipit, officia ut culpa provident reprehenderit mollitia harum minima veritatis
        officiis sit dolor tempore voluptate nobis corporis ipsam animi fugit.`
      },
      {
        id: '12121w-343434-3',
        imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/11.jpg',
        slug: 'curs00-232',
        title: 'Diseño de páginas web con HTML5',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        consequuntur suscipit, officia ut culpa provident reprehenderit mollitia harum minima veritatis
        officiis sit dolor tempore voluptate nobis corporis ipsam animi fugit.`
      }
    ];
  }



  ngAfterViewChecked(): void {
    this.loader.end()
  }

}
