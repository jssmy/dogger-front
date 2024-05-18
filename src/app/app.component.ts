import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenLoaderComponent } from './commons/components/screen-loader/screen-loader.component';
import { ScreenLoaderService } from './commons/services/screen-loader.service';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ScreenLoaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'dogger';
  constructor(
     public readonly loader: ScreenLoaderService
  ) {}

  ngAfterViewInit(): void {
    this.loader.end();
  }
}
