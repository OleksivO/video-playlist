import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Video} from "../../../../../shared/models/video";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html'
})
export class VideoItemComponent{

  @Input() video: Video;

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    this.selected.emit(this.video.link);
  }

}
