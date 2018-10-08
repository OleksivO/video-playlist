import {Injectable} from "@angular/core";
import {BehaviorSubject, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private playlists = [];

  p_state: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.playlists);

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

   createPlayLists(playlist){
     this.playlists.push({...playlist, id: new Date().getTime()});
     this.p_state.next(this.playlists.slice());
     this.storeToStorage();
     return of(true)
   }

   updatePlayList(playlist){
     const index = this.playlists.findIndex(p => p.id === playlist.id);
     this.playlists[index] = {...playlist};
     this.p_state.next(this.playlists.slice());
     this.storeToStorage();
     return of(true)
   }

   getPlaylist(id){
     const playlist = this.playlists.find(p => p.id = id);
     return of({...playlist})
   }
}
