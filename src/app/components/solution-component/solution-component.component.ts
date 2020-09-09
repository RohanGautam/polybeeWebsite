import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-component',
  templateUrl: './solution-component.component.html',
  styleUrls: ['./solution-component.component.scss'],
})
export class SolutionComponentComponent implements OnInit {
  @Input() image: string;
  @Input() title: string = '';
  @Input() para1: string = '';
  @Input() para2: string = '';
  @Input() para3: string = '';
  @Input() imgRight: boolean = false;
  // imgLeft = true;
  // image = 'assets/images/mac-fullpage.png';
  constructor() {}

  ngOnInit(): void {}
}
