import { Component, OnInit } from '@angular/core';
import {DataService} from "../../core/data.service";
import {PlayList} from "../../shared/models/play-list";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html'
})
export class PlaylistsComponent implements OnInit {

  playlists:PlayList[] = [];

  playlist_edit_id = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.p_state.subscribe((response) => {
      this.playlists = response;
    })
  }

  onEdit(event){
    this.playlist_edit_id = event;
  }

  onSubmitHandler(){
    this.playlist_edit_id = null;
  }

}
