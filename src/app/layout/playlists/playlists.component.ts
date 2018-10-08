import { Component, OnInit } from '@angular/core';
import {DataService} from "../../core/data.service";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  p_items = [];

  p_edit = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.p_state.subscribe((response) => {
      this.p_items = response;
    })
  }

  onEdit(event){
    console.log('Event', event);
    this.p_edit = this.p_items.find(item => item.id === event);
    console.log('Edit', this.p_edit);
  }

}
