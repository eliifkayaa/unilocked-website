import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {
  @Input() error: any;

  public errorMessage(status: number) {
    switch (status) {
      case 404:
        return `Bu sayfa geçici süreliğine kapatılmış, taşınmış veya hiç var olmamış olabilir.

        Unilocked’da bulunan binlerce kişi, topluluk ve şirket arasında arama yaparak
        yeni bir sayfaya doğru yola çıkabilirsiniz!`;
      case 403:
        return `Bu sayfayı görüntüleme yetkiniz bulunmuyor.`;
      default:
        return `Bir hata oluştu. Lütfen daha sonra tekrar deneyin.`;
    }
  }
}
