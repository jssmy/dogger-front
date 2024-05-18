import { Component } from '@angular/core';
import { CopyRightsComponent } from '../../commons/components/copy-rights/copy-rights.component';
import { NavbarComponent } from '../../commons/components/navbar/navbar.component';
import { SearchComponent } from '../../commons/components/search/search.component';
import { Course } from '../../commons/interfaces/course';
import { CommonModule } from '@angular/common';
import { CoursePreviewComponent } from '../../commons/components/course-preview/course-preview.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CopyRightsComponent,
    NavbarComponent,
    SearchComponent,
    CommonModule,
    CoursePreviewComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export default class ArticlesComponent {
  articles: Course[] = [
    {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/11.jpg',
      slug: 'curs00-232',
      title: 'Diseño de páginas web con HTML5',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      consequuntur suscipit, officia ut culpa provident reprehenderit mollitia harum minima veritatis
      officiis sit dolor tempore voluptate nobis corporis ipsam animi fugit.`
    },
    {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/02.jpg',
      slug: 'curs00-232',
      title: 'Photosop para principiantes - conceptos basicos',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      consequuntur suscipit, officia ut culpa provident reprehenderit mollitia harum minima veritatis
      officiis sit dolor tempore voluptate nobis corporis ipsam animi fugit.`
    },
    {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/08.jpg',
      slug: 'curs00-232',
      title: 'Aprende PERL en 5 horas',
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
    },
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
