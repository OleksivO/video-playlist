import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayList} from "../../../shared/models/play-list";

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html'
})
export class PlaylistItemComponent {

  @Input() playlist: PlayList;
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();

  onEditClickHandler() {
    this.edit.emit(this.playlist.id)
  }

}
