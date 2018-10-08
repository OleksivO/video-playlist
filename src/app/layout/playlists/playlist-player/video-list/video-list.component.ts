import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayList} from "../../../../shared/models/play-list";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html'
})
export class VideoListComponent {

  @Input() playlist: PlayList;

  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();

  onItemSelected(event){
    this.selectedItem.emit(event)
  }

}
