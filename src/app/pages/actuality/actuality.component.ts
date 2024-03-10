import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-actuality',
  standalone: true,
  imports: [MarkdownComponent, MarkdownModule],
  templateUrl: './actuality.component.html',
  styleUrl: './actuality.component.less'
})
export class ActualityComponent {

  public listActualite: any[] = [];

  constructor(
    private dataService: DatabaseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dataService.getListActu().subscribe((res) => {
      this.listActualite = res.data;
    })
  }

  getFullDate(date: string) {
    const dateFormat = new Date(date);
    const mois: string = dateFormat.toLocaleString("fr-FR", { month: 'long' });
    return `${dateFormat.getDate()} ${mois} ${dateFormat.getFullYear()}`;
  }

  routerActualite(routerActualite: string) {
    this.router.navigateByUrl(`/actualite/${routerActualite}`);
  }

  getText(text: string): string {
    //return this.sanitizer.bypassSecurityTrustHtml(text.replaceAll(':Screws:', '<img src="/assets/icon-site/screws.png" alt="screws" class="emoji"/>'));
    if(text != undefined) {
      return text.replaceAll(':Screws:', '<img src="/assets/icon-site/screws.png" alt="screws" class="emoji"/>');
    } else {
      return '';
    }
  }
}
