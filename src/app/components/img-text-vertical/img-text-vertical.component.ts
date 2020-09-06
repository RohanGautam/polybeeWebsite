import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-text-vertical',
  templateUrl: './img-text-vertical.component.html',
  styleUrls: ['./img-text-vertical.component.scss'],
})
export class ImgTextVerticalComponent implements OnInit {
  // image = 'assets/images/plot-viewer.png';
  @Input() image: string;
  @Input() text: string = '';
  @Input() title: string = '';
  @Input() imgWidth: string = '100px';
  // text =
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
  // text = 'Lorem ipsum dolor sit amet';
  constructor() {}

  ngOnInit(): void {}
}
