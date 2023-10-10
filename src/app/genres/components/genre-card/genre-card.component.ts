import {Component, Input} from '@angular/core';
import {Genre} from "../../../shared/interfaces/genre";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent {
  @Input() genre : Genre = {} as Genre;
}
