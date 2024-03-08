import { Component, ElementRef, Input, ViewChild, Renderer2 } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute } from '@angular/router';
import { TiktokComponent } from '../../components/tiktok/tiktok.component';

@Component({
  selector: 'app-info-actuality',
  standalone: true,
  imports: [TiktokComponent],
  templateUrl: './info-actuality.component.html',
  styleUrl: './info-actuality.component.less'
})
export class InfoActualityComponent {
  public infoActualite: any = {};
  private actualiteId: string | null = "";

  constructor(
    private dataService: DatabaseService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.actualiteId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.actualiteId != null) {
      this.dataService.getActualiteById(this.actualiteId).subscribe((res) => {
        this.infoActualite = res.data[0];
      })
    }
    console.log(this.infoActualite);
  }

  getDate(date: string): string {
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString();
  }
}
