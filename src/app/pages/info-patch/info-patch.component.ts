import { Component } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MarkdownComponent, MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-info-patch',
  standalone: true,
  imports: [MarkdownComponent, MarkdownModule],
  templateUrl: './info-patch.component.html',
  styleUrl: './info-patch.component.less'
})
export class InfoPatchComponent {
  public infoPatchNote: any = {};
  private patchNoteId: string | null = "";
  public shareLink: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.patchNoteId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.patchNoteId != null) {
      this.dataService.getPatchNoteById(this.patchNoteId).subscribe((res: any) => {
        this.infoPatchNote = res.data[0];
      });
      this.shareLink = `${environment.shareLink}/patch-note/${this.patchNoteId}`;
      if(this.infoPatchNote['patchNote_title'] != undefined) {
        this.meta.updateTag(
          { property: 'og:title', content: `${this.infoPatchNote['patchNote_title'].replaceAll(':Screws:', '')}・Plaquist Simulator` },
        );
        this.meta.updateTag(
          { property: 'og:description', content: `Découvrez les toutes dernières évolutions de Plaquist Simulator avec nos notes de patch ! Plongez dans les améliorations, les ajustements et les nouvelles fonctionnalités qui enrichissent votre expérience de jeu. Restez informé des corrections de bugs, des optimisations et des ajouts qui peaufinent l'univers captivant de Plaquist Simulator. Consultez nos notes de patch pour être au courant de toutes les nouveautés et maximiser votre aventure en tant qu'apprenti plaquiste en quête de gloire !` },
        );
      }
    }
    console.log(this.infoPatchNote);
  }

  getDate(date: string): string {
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString();
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