import { Component } from '@angular/core';
import { CoursePreviewComponent } from '../../../../../commons/components/course-preview/course-preview.component';
import { Course } from '../../../../../commons/interfaces/course';

@Component({
  selector: 'app-popular-articles',
  standalone: true,
  imports: [
    CoursePreviewComponent
  ],
  templateUrl: './popular-articles.component.html',
  styleUrl: './popular-articles.component.scss'
})
export class PopularArticlesComponent {
  courses: Course[] = [
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
