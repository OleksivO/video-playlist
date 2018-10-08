import { NgModule } from '@angular/core';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import {PlaylistsComponent} from "./playlists.component";
import {PlaylistsRoutingModule} from "./playlists-routing.module";
import {PlaylistPlayerComponent} from "./playlist-player/playlist-player.component";
import {VideoListComponent} from "./playlist-player/video-list/video-list.component";
import {VideoItemComponent} from "./playlist-player/video-list/video-item/video-item.component";
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    PlaylistsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PlaylistItemComponent,
    PlaylistsComponent,
    PlaylistPlayerComponent,
    VideoListComponent,
    VideoItemComponent,
    PlaylistEditComponent
  ]
})
export class PlaylistsModule { }
