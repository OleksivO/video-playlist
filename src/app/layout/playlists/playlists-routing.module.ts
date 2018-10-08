import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {PlaylistsComponent} from "./playlists.component";
import {PlaylistPlayerComponent} from "./playlist-player/playlist-player.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'play-lists'
      },
      {
        path: 'play-lists',
        component: PlaylistsComponent,
      },
      {
        path: ':id/player',
        component: PlaylistPlayerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlaylistsRoutingModule { }
