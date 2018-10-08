import {Component, Input, OnChanges} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnChanges{

  constructor(private sanitizer: DomSanitizer) { }

  @Input() sourceURLs:string;

  trustedURL;

  index = 0;

  ngOnChanges(){
    this.setTrustedUrl()
  }

  onEnded(){
    if(this.sourceURLs[this.index + 1]) {
      this.index += 1;
    }else {
      this.index = 0;
    }
    this.setTrustedUrl()
  }

  setTrustedUrl() {
    this.trustedURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceURLs[this.index])
  }
}
