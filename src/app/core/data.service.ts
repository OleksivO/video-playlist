import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private playlists = [
    {
      name: 'PL_1',
      id: '1',
      videos: [{
        title: 'Video 1',
        author: 'Author 1',
        link: 'something'
      }]
    },
    {
      name: 'PL_2',
      id: '2',
      videos: []
    },
    {
      name: 'PL_3',
      id: '3',
      videos: []
    }
  ];

  p_state: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.playlists);

  constructor() {
    this.loadPlayLists()
  }

   loadPlayLists(){
     localStorage.setItem('play-lists', JSON.stringify(this.playlists));
   }

   setStorage(p_ts){
     localStorage.setItem('play-lists', JSON.stringify(p_ts));
     this.playlists = p_ts;
     this.p_state.next(this.playlists);
   }

   createPlayLists(playlist){
     const p_copy = this.playlists.filter(p => p.id !== playlist.id);
     p_copy.push({...playlist, id: new Date().getTime()});
     this.setStorage(p_copy);
   }

   updatePlayList(playlist){
     const p_copy = this.playlists.filter(p => p.id !== playlist.id);
     p_copy.push(playlist);
     this.setStorage(p_copy);
   }
}
