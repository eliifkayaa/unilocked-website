import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/auth/auth.service';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(public auth:AuthService) { }

  public notifications = [
    {icon : "https://pbs.twimg.com/profile_images/1624030016865505282/F0CCB1dR_400x400.jpg", title : "2023 Yaz Genel Staj İlanı", subtitle : "Warner Music Türkiye", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "7 ay"},
    {icon : "https://www.yuzde100yerli.com/wp-content/uploads/2015/01/arcelik-logo-kirmizi.jpg", title : "Beko Staj Programı - 2023 Yazı - Genel Başvuru", subtitle : "Arçelik", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "1 yıl"},
    {icon : "https://pbs.twimg.com/profile_images/1624030016865505282/F0CCB1dR_400x400.jpg", title : "2023 Yaz Genel Staj İlanı", subtitle : "Warner Music Türkiye", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "7 ay"},
    {icon : "https://www.yuzde100yerli.com/wp-content/uploads/2015/01/arcelik-logo-kirmizi.jpg", title : "Beko Staj Programı - 2023 Yazı - Genel Başvuru", subtitle : "Arçelik", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "1 yıl"},
    {icon : "https://pbs.twimg.com/profile_images/1624030016865505282/F0CCB1dR_400x400.jpg", title : "2023 Yaz Genel Staj İlanı", subtitle : "Warner Music Türkiye", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "7 ay"},
    {icon : "https://www.yuzde100yerli.com/wp-content/uploads/2015/01/arcelik-logo-kirmizi.jpg", title : "Beko Staj Programı - 2023 Yazı - Genel Başvuru", subtitle : "Arçelik", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "1 yıl"},
    {icon : "https://pbs.twimg.com/profile_images/1624030016865505282/F0CCB1dR_400x400.jpg", title : "2023 Yaz Genel Staj İlanı", subtitle : "Warner Music Türkiye", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "7 ay"},
    {icon : "https://www.yuzde100yerli.com/wp-content/uploads/2015/01/arcelik-logo-kirmizi.jpg", title : "Beko Staj Programı - 2023 Yazı - Genel Başvuru", subtitle : "Arçelik", location : "İstanbul, Türkiye", info : "Bu ilan yayından kaldırıldı ve yeni başvuru kabul edilmiyor", date : "1 yıl"},
  ]

  ngOnInit(): void {
  }

}
