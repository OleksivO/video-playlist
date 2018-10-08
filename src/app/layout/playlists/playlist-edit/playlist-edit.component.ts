import {Component, Input, OnChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../core/data.service";

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnChanges {

  @Input() id_selected;

  playlist = {
    name: '',
    videos: []
  };

  video = {
    title: '',
    author: '',
    link: ''
  };

  editMode = false;


  constructor(private dataService: DataService) { }

  ngOnChanges() {
    this.editMode = this.id_selected !== null;
    if(this.editMode){
      this.getPlaylist();
    }
  }

  getPlaylist(){
    this.dataService.getPlaylist(this.id_selected).subscribe(
      response => {
        this.playlist = response;
      }
    )
  }

  onAddVideo(){
    this.playlist.videos.unshift({...this.video});
    this.video = {...{}, ...{title: '', author: '', link: ''}}
  }

  onRemoveVideo(i){
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
  }

  reset(){
    this.editMode = false;
    this.video = {...{}, ...{title: '', author: '', link: ''}};
    this.playlist = {...{}, ...{name: '', videos: []}}
  }

}
