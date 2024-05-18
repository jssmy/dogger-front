import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvatarWriterComponent } from '../../../pages/article/commons/components/avatar-writer/avatar-writer.component';

@Component({
  selector: 'app-course-preview',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AvatarWriterComponent
  ],
  templateUrl: './course-preview.component.html',
  styleUrl: './course-preview.component.scss'
})
export class CoursePreviewComponent {
  @Input() course!: Course;
  @Input() size: 'large' | 'small' = 'small';

  getDescription(description: string) {
    if (this.size === 'small') {
      return this.course.description.substring(0, 100).concat('...');
    }
    return this.course.description.substring(0, 200).concat('...');
  }
}
