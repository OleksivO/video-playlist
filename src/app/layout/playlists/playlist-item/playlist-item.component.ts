import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent {

  @Input() p_item;
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();

  onEditClickHandler() {
    this.edit.emit(this.p_item.id)
  }

  constructor() { }

}
