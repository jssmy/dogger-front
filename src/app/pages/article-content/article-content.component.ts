import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/components/navbar/navbar.component';
import { CopyRightsComponent } from '../../commons/components/copy-rights/copy-rights.component';

@Component({
  selector: 'app-article-content',
  standalone: true,
  imports: [
    NavbarComponent,
    CopyRightsComponent
  ],
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss'
})
export default class ArticleContentComponent {

}
