import {Component, Input, OnChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../core/data.service";

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnChanges {

  @Input() p_selected;

  editMode = false;

  p_form: FormGroup;

  constructor(private dataService: DataService) { }

  ngOnChanges() {
    this.editMode = this.p_selected !== null;
    this.initForm();
    console.log('Detected changes');
  }

  initForm(){
    let name = null;
    let videos = new FormArray([]);
    if(this.editMode){
      name = this.p_selected.name;
      if(this.p_selected.videos.length){
        this.p_selected.videos.forEach(video => {
          videos.push(new FormGroup({
            'title': new FormControl(video.title, Validators.required),
            'author': new FormControl(video.author, Validators.required),
            'link': new FormControl(video.link, Validators.required),
          }))
        })
      }
    }

    this.p_form = new FormGroup({
      name: new FormControl(name, Validators.required),
      videos: videos
    })

  }

  onAddVideo(){
    (<FormArray>this.p_form.get('videos')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'author': new FormControl(null, Validators.required),
        'link': new FormControl(null, Validators.required)
      })
    );
  }

  onRemoveVideo(position){
    (<FormArray>this.p_form.get('videos')).removeAt(position);
  }

  getControls() {
    return (<FormArray>this.p_form.get('videos')).controls;
  }

  onSubmit(){
    console.log('Form', this.p_form.value);
    if(this.editMode){
      this.dataService.updatePlayList(this.p_form.value);
    }else{
      this.dataService.createPlayLists(this.p_form.value)
    }
    this.p_form.markAsPristine();
  }


}
