import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var YT: any;

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnDestroy {
  @ViewChild('youtubePlayer')
  youtubePlayer!: ElementRef;
  private player: any;
  private ytEvent: any;

  constructor() { }
  ngOnDestroy(): void {
    if (this.player) {
      this.player.destroy();
    }
    throw new Error('Method not implemented.');
  }

  onYouTubeIframeAPIReady() {
    this.player = new YT.Player(this.youtubePlayer.nativeElement, {
      height: '360',
      width: '1000',
      videoId: '4DMmcxyIu1A', // Replace with your YouTube video ID
      playerVars: {
        'controls': 0, // Hide YouTube controls
        'fs': 0, // Hide fullscreen button
        'modestbranding': 1, // Remove YouTube logo
        'rel': 0, // Don't show related videos at the end
        'showinfo': 0, // Hide video information
        'iv_load_policy': 3, // Hide annotations
        'disablekb': 1 // Disable keyboard controls
      },
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }
  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    // Add custom logic for player state change if needed
  }

}
