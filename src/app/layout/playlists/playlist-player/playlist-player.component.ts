import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../core/data.service";
import {ActivatedRoute, Params} from "@angular/router";
import {PlayList} from "../../../shared/models/play-list";

@Component({
  selector: 'app-playlist-player',
  templateUrl: './playlist-player.component.html'
})
export class PlaylistPlayerComponent implements OnInit {

  playlist: PlayList = {
    name: '',
    videos: []
  };

  playlistId: string;

  videosUrls: string[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.playlistId = params.id;
      }
    )
  }

  ngOnInit() {
    this.dataService.getPlaylist(this.playlistId).subscribe(
      response => {
        this.playlist = response;
        this.playlist.videos.forEach(video => {
          this.videosUrls.push(video.link)
        })
      }
    )
  }

  onVideoSelect(event) {
    this.videosUrls.length = 0;
    this.videosUrls.push(event)
  }

}
