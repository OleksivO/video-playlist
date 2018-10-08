import {Injectable} from "@angular/core";
import {BehaviorSubject, of} from "rxjs";
import {PlayList} from "../shared/models/play-list";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private playlists: PlayList[];

  p_state: BehaviorSubject<PlayList[]> = new BehaviorSubject<PlayList[]>(this.playlists);

  constructor() {
    this.loadFromStorage()
  }

   storeToStorage(){
    localStorage.setItem('play-lists', JSON.stringify(this.playlists));
   }

   loadFromStorage(){
     this.playlists = JSON.parse(localStorage.getItem('play-lists')) || [];
     this.p_state.next(this.playlists.slice())
   }

   createPlayLists(playlist: PlayList){
     this.playlists.push({...playlist, id: new Date().getTime().toString()});
     this.p_state.next(this.playlists.slice());
     this.storeToStorage();
     return of(true)
   }

   updatePlayList(playlist: PlayList){
     const index = this.playlists.findIndex(p => p.id === playlist.id);
     this.playlists[index] = {...playlist};
     this.p_state.next(this.playlists.slice());
     this.storeToStorage();
     return of(true)
   }

   getPlaylist(id: string){
     const playlist = this.playlists.find(p => p.id === id);
     return of({...{},...playlist})
   }
}
