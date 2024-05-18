import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenLoaderService {

  private loading$ = new BehaviorSubject<boolean>(true);

  public get isloading$() {
    return this.loading$.asObservable();
  }

  public start() {
    this.loading$.next(true);
  }

  public end() {
    timer(2000)
    .subscribe(() => this.loading$.next(false));
  }

}
