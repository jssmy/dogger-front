import { Component } from '@angular/core';
import { CoursePreviewComponent } from '../../../../../commons/components/course-preview/course-preview.component';
import { Course } from '../../../../../commons/interfaces/course';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CoursePreviewComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  courses: Course[] = [
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
    },
    {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/11.jpg',
      slug: 'curs00-232',
      title: 'Diseño de páginas web con HTML5'
    },
    {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/12.jpg',
      slug: 'curs00-232',
      title: 'Aprende CSS3 desde cero hasta experto'
    },
    {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/09.jpg',
      slug: 'curs00-232',
      title: 'Programacion orientado a objetos con javascript'
    },
    {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/11.jpg',
      slug: 'curs00-232',
      title: 'Diseño de páginas web con HTML5'
    }, {
      id: '12121w-343434-3',
      imagePreview: 'https://eduport.webestica.com/assets/images/courses/4by3/03.jpg',
      slug: 'curs00-232',
      title: 'Diseña como los profionales usando figma'
    }

  ];
}
