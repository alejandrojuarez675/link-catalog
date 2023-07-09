import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-chip',
  templateUrl: './link-chip.component.html',
  styleUrls: ['./link-chip.component.sass'],
})
export class LinkChipComponent {
  @Input()
  text!: string;

  @Input()
  srcImg!: string;
}
