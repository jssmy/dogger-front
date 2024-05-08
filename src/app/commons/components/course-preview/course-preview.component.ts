import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-preview',
  standalone: true,
  imports: [],
  templateUrl: './course-preview.component.html',
  styleUrl: './course-preview.component.scss'
})
export class CoursePreviewComponent {
  @Input() course!: Course;
}
