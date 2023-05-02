import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public post = {
    type: 'Gönderi',
    image: 'https://blog.playstation.com/tachyon/2023/03/32cc019fdeb424906ac3ebf8e697ad190df79b8e.jpg?resize=1088%2C612&crop_strategy=smart',
    content: "LeBron James Limited Edition PS5 Konsol Kapaklarına ve DualSense kablosuz kontrol cihazına göz atın. İşte spor ikonu ve PlayStation Playmaker ile özel bir işbirliğine ilk bakış.",
  };
  public post2 = {
    type: 'Gönderi',
    image: 'https://i.ytimg.com/vi/E3Bu9aBzKk4/maxresdefault.jpg',
    content: "Sony Interactive Entertainment, Kadın Tarihi Ayı'nı kutlayan küresel topluluğa katılmaktan heyecan duyuyor. Mart ayı boyunca, kadınların hem oyun oynamalarına hem de topluma katkılarını anacağız. PlayStation Store'da küratörlüğünü yaptığımız Amazing Heroines koleksiyonumuza göz atmayı unutmayın. PlayStation'da bulunan en heyecan verici kadın karakterlerden, anlatılardan ve hikayelerden bazılarını öne çıkarıyor. Bu koleksiyonların oluşturulması önemlidir, çünkü bir kahramanın topluluğumuz için nasıl görünebileceğine dair imajı ve algıyı etkilemeyi umuyoruz. Birlikte oyunun sınırlarını zorlayalım!",
  };
  public post3 = {
    type: 'Gönderi',
    image: 'https://static-prod.adweek.com/wp-content/uploads/2021/04/Eric-Lempel_ITB2-652x367.jpg',
    content: "Oyunun gücünü kanıtlayan tutkulu oyuncular, içerik oluşturucular, sporcular, sanatçılar ve şovmenlerden oluşan büyüyen bir ağ olan PlayStation Playmaker'larla tanışın.",
  };
  public post4 = {
    type: 'Gönderi',
    image: 'https://mixed-news.com/en/wp-content/uploads/2022/11/Playstation-VR-2-Blue-Backdrop.jpeg',
    content: "PlayStation VR2'nin bugün dünya çapında piyasaya sürülmesiyle yeni nesil sanal gerçeklik oyunları başlıyor. Özellikleri ve oyun dizisi hakkında daha fazla bilgi edinin:",
  };

  public company = {
    name: 'Playstation Türkiye',
    slogan : 'Pushing the Boundaries of Play',
    info: '35.701 Takipçi • İstanbul, Türkiye',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLSXiy7dSBzgSKU-4wTmqs8hUZ0d4w6RMjsQEjlEFVs=s900-c-k-c0x00ffffff-no-rj',
    about1: "Etkileşimli ve dijital eğlence alanlarında dünya lideri olarak kabul edilen Sony Interactive Entertainment (SIE), PlayStation® markası ile bu markanın ürün ve hizmet ailesinden sorumludur. PlayStation, ilk PlayStation'ın Japonya'da satışa sunulduğu 1994'ten bu yana pazara yenilikler sundu.",
    about2: "PlayStation ürün ve hizmet ailesi PlayStation®5, PlayStation®4, PlayStation®VR, PlayStation™Store, PlayStation®Plus ve PlayStation Studios'un başarılı PlayStation yazılım ürünlerini içerir.",
    about3: "Sony Group Corporation'ın yüzde yüz bağlı kuruluşu olan Kaliforniya San Mateo merkezli SIE; Kaliforniya, Londra ve Tokyo olmak üzere dünya çapında faaliyet göstermektedir.",
    sector : 'Eğlence',
    workers : '101-250 Çalışan',
    contact: {
      mail: 'playstationturkiye@playstation.com',
      website: 'www.playstation.com/tr-tr/',
      address: 'Ziya Gökalp Caddesi No:48 06420, Kolej Çankaya ANKARA',
    },
    posts: [this.post, this.post2],
    featured: [this.post3, this.post4]
  };

}
