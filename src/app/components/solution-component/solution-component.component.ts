import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-component',
  templateUrl: './solution-component.component.html',
  styleUrls: ['./solution-component.component.scss'],
})
export class SolutionComponentComponent implements OnInit {
  image = 'assets/images/mac-fullpage.png';

  constructor() {}

  ngOnInit(): void {}
}
