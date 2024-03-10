import { Component, ElementRef, Input, ViewChild, Renderer2 } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute } from '@angular/router';
import { TiktokComponent } from '../../components/tiktok/tiktok.component';
import { DomSanitizer, Meta, SafeHtml } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { MarkdownComponent, MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-info-actuality',
  standalone: true,
  imports: [TiktokComponent, MarkdownModule, MarkdownComponent],
  templateUrl: './info-actuality.component.html',
  styleUrl: './info-actuality.component.less'
})
export class InfoActualityComponent {
  public infoActualite: any = {};
  private actualiteId: string | null = "";
  public shareLink: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DatabaseService,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
  ) { }

  ngOnInit(): void {
    this.actualiteId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.actualiteId != null) {
      this.dataService.getActualiteById(this.actualiteId).subscribe((res) => {
        this.infoActualite = res.data[0];
      });
      this.shareLink = `${environment.shareLink}/actualite/${this.actualiteId}`;
      if(this.infoActualite['actu_title'] != undefined) {
        this.meta.updateTag(
          { property: 'og:title', content: `${this.infoActualite['actu_title'].replaceAll(':Screws:', '')}・Plaquist Simulator` },
        );
        this.meta.updateTag(
          { property: 'og:description', content: `Explorez les actualités les plus récentes de Plaquist Simulator ! Restez informé(e) sur les dernières mises à jour, les événements spéciaux et les annonces exclusives qui façonnent l'univers dynamique du jeu. Découvrez les histoires fascinantes derrière les nouvelles fonctionnalités, les succès de la communauté et les défis à venir. Plongez dans le monde passionnant de Plaquist Simulator en restant connecté(e) à nos actualités, pour ne rien manquer des opportunités, des surprises et des moments inoubliables qui vous attendent dans cette aventure de construction captivante !` },
        );
      }
    }
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
