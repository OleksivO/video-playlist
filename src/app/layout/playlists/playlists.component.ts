import { Component, OnInit } from '@angular/core';
import {DataService} from "../../core/data.service";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html'
})
export class PlaylistsComponent implements OnInit {

  p_items = [];

  p_edit_id = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.p_state.subscribe((response) => {
      this.p_items = response;
    })
  }

  onEdit(event){
    console.log('Event', event);
    this.p_edit_id = event;
  }

}
