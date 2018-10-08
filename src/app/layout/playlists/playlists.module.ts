import { NgModule } from '@angular/core';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import {PlaylistsComponent} from "./playlists.component";
import {PlaylistsRoutingModule} from "./playlists-routing.module";
import {PlaylistPlayerComponent} from "./playlist-player/playlist-player.component";
import {VideoListComponent} from "./playlist-player/video-list/video-list.component";
import {VideoItemComponent} from "./playlist-player/video-list/video-item/video-item.component";

@NgModule({
  imports: [
    PlaylistsRoutingModule
  ],
  declarations: [
    PlaylistItemComponent,
    PlaylistsComponent,
    PlaylistPlayerComponent,
    VideoListComponent,
    VideoItemComponent
  ]
})
export class PlaylistsModule { }
