import { Component } from '@angular/core';
import { SearchComponent } from '../../../../../commons/components/search/search.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
