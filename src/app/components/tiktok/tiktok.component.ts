import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TiktoklinkService } from '../../services/tiktoklink.service';


@Component({
  selector: 'app-tiktok',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tiktok.component.html',
  styleUrl: './tiktok.component.less'
})
export class TiktokComponent {
  @Input() tikTokShortLink: string = '';
  embedCode: SafeHtml = '';
  videoId: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private tiktokService: TiktoklinkService
  ) { }

  ngOnInit() {
    if (this.tikTokShortLink) {
      // Vous devrez extraire l'ID de la vidéo TikTok à partir du lien court
      this.tiktokService.getInfoTiktok(this.tikTokShortLink).subscribe((res) => {
        this.videoId = res.embed_product_id;
        this.embedCode = this.sanitizer.bypassSecurityTrustHtml(`<iframe src="https://www.tiktok.com/embed/v2/${this.videoId}?lang=fr" width="max-content" height="max-content" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="tiktokFrame"></iframe>`);
      })
      // Construire l'URL de l'embed TikTok

    }
  }

}
