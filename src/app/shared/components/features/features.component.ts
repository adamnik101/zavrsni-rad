import {Component, Input} from '@angular/core';
import {Artist} from "../../interfaces/artist";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  @Input('features') features : Artist[] = {} as Artist[]

}
