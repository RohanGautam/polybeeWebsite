import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.scss'],
})
export class MediaTileComponent implements OnInit {
  @Input() image: string;
  @Input() link: string = null;
  @Input() description: string = null;

  constructor() {}

  ngOnInit(): void {}

  openLink() {
    if (this.link) {
      window.open(this.link, 'blank');
    }
  }
}
