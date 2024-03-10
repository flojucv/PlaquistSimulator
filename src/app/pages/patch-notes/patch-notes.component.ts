import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';


@Component({
  selector: 'app-patch-notes',
  standalone: true,
  imports: [MarkdownComponent, MarkdownModule],
  templateUrl: './patch-notes.component.html',
  styleUrl: './patch-notes.component.less'
})
export class PatchNotesComponent {

  public listPatchNote: any[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private dataService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.dataService.getListPatchNote().subscribe((res) => {
      this.listPatchNote = res.data;
    })
  }

  getFullDate(date: string) {
    const dateFormat = new Date(date);
    const mois: string = dateFormat.toLocaleString("fr-FR", { month: 'long' });
    return `${dateFormat.getDate()} ${mois} ${dateFormat.getFullYear()}`;
  }

  routerActualite(routerActualite: string) {
    this.router.navigateByUrl(`/patch-note/${routerActualite}`);
  }

  getTextReplace = (text: string): string => {
    //return this.sanitizer.bypassSecurityTrustHtml(text.replaceAll(':Screws:', '<img src="/assets/icon-site/screws.png" alt="screws" class="emoji"/>'));
    if(text != undefined) {
      return text.replaceAll(':Screws:', '<img src="/assets/icon-site/screws.png" alt="screws" class="emoji"/>');
    } else {
      return '';
    }
  }
}
