import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../../../../commons/components/search/search.component';
import { ActivatedRoute, Router } from '@angular/router';

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

  currentQuery: string = '';
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ){}


  onSearch(query: string) {
    this.router.navigate([
      'articles'
    ], { queryParams: { query }});
  }
}
