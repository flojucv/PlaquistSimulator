import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

  constructor(
    private router: Router,
  ) { }

  public affichageMenu() {
    const menu = window.document.getElementById('menu');

    menu?.classList.toggle('showMenu');
  }

  public redirection(redirect: string) {
    this.router.navigateByUrl(`/${redirect}`);
    this.affichageMenu();
  }
}
