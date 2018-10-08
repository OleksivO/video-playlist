import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html'
})
export class VideoItemComponent{

  @Input() video;

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    this.selected.emit(this.video.link);
  }

}
