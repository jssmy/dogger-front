import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() placeHolder = 'Typing...';
  @Input() styled: 'ligth' | 'normal' = 'normal';
}
