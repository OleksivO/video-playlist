import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'play-lists'
      },
      {
        path: 'play-lists',
        loadChildren: './playlists/playlists.module#PlaylistsModule',
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
export class LayoutRoutingModule {
}

