import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundColorService {

  private backgroundColor: string = '#171719';

  setBackgroundColor(color: string) {
    this.backgroundColor = color;
  }

  getBackgroundColor() : string {
    return this.backgroundColor;
  }
}
