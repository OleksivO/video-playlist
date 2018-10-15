import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {DataService} from "../../../core/data.service";
import {PlayList} from "../../../shared/models/play-list";
import {Video} from "../../../shared/models/video";

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnChanges {

  @Input() playlist_id_selected;

  @Output() sumbitted = new EventEmitter();

  playlist: PlayList = {
    name: '',
    videos: []
  };

  video: Video = {
    title: '',
    author: '',
    link: 'http://techslides.com/demos/sample-videos/small.webm'
  };

  editMode = false;


  constructor(private dataService: DataService) { }

  ngOnChanges() {
    this.reset();
    this.editMode = this.playlist_id_selected !== null;
    if(this.editMode){
      this.getPlaylist();
    }
  }

  getPlaylist(){
    this.dataService.getPlaylist(this.playlist_id_selected).subscribe(
      response => {
        this.playlist = {...response};
      }
    )
  }

  onAddVideo(){
    this.playlist.videos.unshift({...this.video});
    this.video = {...{}, ...{title: '', author: '', link: 'http://techslides.com/demos/sample-videos/small.webm'}};
  }

  onRemoveVideo(i: number){
    this.playlist.videos.splice(i,1)
  }

  savePlaylist(){
    if(this.editMode){
      this.dataService.updatePlayList(this.playlist).subscribe(
        () => this.reset()
      )
    }else{
      this.dataService.createPlayLists(this.playlist).subscribe(
        () => this.reset()
      )
    }
    this.sumbitted.emit()
  }

  reset(){
    this.editMode = false;
    this.video = {...{}, ...{title: '', author: '', link: 'http://techslides.com/demos/sample-videos/small.webm'}};
    this.playlist = {...{}, ...{name: '', videos: []}}
  }

  get isVideoValid() {
    return this.video.link.trim().length && this.video.author.trim().length && this.video.link.trim().length
  }

  get playListValid() {
    return this.playlist.name.trim().length
  }


}
