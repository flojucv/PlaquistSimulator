import { Component } from '@angular/core';

@Component({
  selector: 'app-bandeau',
  standalone: true,
  imports: [],
  templateUrl: './bandeau.component.html',
  styleUrl: './bandeau.component.less'
})
export class BandeauComponent {
  public displayBandeau: Boolean = true;

  public closeBandeau() {
    this.displayBandeau = false;
  }
}
