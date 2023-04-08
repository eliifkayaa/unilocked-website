import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public project = {
    type: 'Proje',
    image: 'https://www.antalyateknokent.com.tr/Upload/File/2022/8/15/11114.jpg',
    title: 'Tufan Elektromobil Projesi',
    content: 'ALECTED topluluğu olarak otonom araç projesi üzerinde çalışıyoruz',
    parent : {
      image: 'https://pbs.twimg.com/profile_images/1187722813840482307/UERSPXhG_400x400.jpg',
      name : 'ALECTED'
    },
  };

  public project2 =  {
    image: 'https://www.antalyateknokent.com.tr/Upload/File/2022/8/15/397.jpeg',
    title: 'Tufan Elektromobil Projesi',
    content: 'ALECTED topluluğu olarak otonom araç projesi üzerinde çalışıyoruz',
    parent : {
      image: 'https://pbs.twimg.com/profile_images/1187722813840482307/UERSPXhG_400x400.jpg',
      name : 'ALECTED'
    },
  }

  public post = {
    type: 'Gönderi',
    image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2023/03/11/thumbs_b_c_5231d9aaabd370523cbd584b144f91db.jpg?v=115911',
    title: 'Deprem Seferberliği!',
    content:
      'Akdeniz Üniversitesi, asrın felaketi olarak nitelendirilen deprem sonrası öğrencilerine ve bölge halkına yardım için seferber oldu.',
  };

  public school = {
    name: 'Akdeniz Üniversitesi',
    slogan : 'Eğitimde ve Bilimde Öncü Üniversite',
    info: '35.701 Takipçi • Antalya, Türkiye',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/4/4c/Akdeniz_uni.gif/800px-Akdeniz_uni.gif',
    about1: 'Akdeniz Üniversitesi 1982 yılında Batı Akdeniz bölgesindeki yükseköğretim kurumlarını da kapsayacak şekilde Antalya’da kurulmuştur.',
    about2: 'Kuruluşundan bugüne Akdeniz Üniversitesi eğitim öğretim, araştırma geliştirme ve topluma hizmet alanlarında çok önemli faaliyetlerde bulunarak Batı Akdeniz çanağından başlayarak ülkemizin tümünde katma değer oluşturan uygulamalarda bulunmuştur. Ulusal ve uluslararası düzeyde sağlık, fen, sosyal, eğitim, dil, sanat vb. alanlarda üstün başarılara imza atılmıştır. Üniversitemizin ana yerleşkesi Dumlupınar Bulvarı ile Uncalı semti arasında yer alan bölgede kurulmuştur.',
    about3: 'Merkez yerleşke 3.483.589 m2 arazi yüzölçümü ve 615.105 m2 yapı alanına sahiptir. Tüm yerleşkelerin toplamında 681.598 m2 kapalı alan bulunmaktadır. Akdeniz Üniversitesi bugün itibariyle 24 Fakülte, 7 Enstitü, 1 Yüksekokul, 1 Konservatuar, 12 Meslek Yüksekokulu ve 57 adet araştırma ve uygulama merkezinde eğitim, araştırma ve topluma hizmet noktasında çeşitli faaliyetlerine devam etmektedir.',
    sector : 'Yüksek Öğrenim',
    students : '10.000+ Öğrenci',
    contact: {
      phone: '+90 (242) 2274400',
      website: 'http://www.akdeniz.edu.tr/',
      address: 'Dumlupınar Bulvarı 07058 Kampus, Antalya / TÜRKİYE, Antalya, 07058, TR',
    },
    posts: [this.post, this.post],
    featured: [this.project, this.post],
    education: [
      {
        title: 'Yazılım Mühendisliği',
        school: 'TED Üniversitesi',
        image: 'assets/img/ted.png',
        date: '2017 - 2021',
        description:
          'Lorem ipsum dolor sit amet consectetur. Consectetur dictum auctor nec morbi diam. Maecenas proin porttitor enim viverra feugiat quam felis aliquam.',
        communities: [
          {
            name: 'ALECTED',
            image: 'assets/img/alekted.png',
            role: 'Üye',
            joinDate: '2020 - 2021',
          },
        ],
        talents: [
          {
            name: 'HTML',
            level: 90,
          },
        ],
        educationInfo: {
          type: 'Lisans',
          startYear: '2017',
          endYear: '2021',
          gpa: '3.00',
          major: 'Yazılım Mühendisliği',
          minor: 'Bilgisayar Mühendisliği',
          school: 'TED Üniversitesi',
          schoolType: 'Üniversite',
          elective: [
            { name: 'Oyun Programlama', grade: 'AA' },
            { name: 'Algoritma Analizi', grade: 'BA' },
            { name: 'Mikroişlemciler', grade: 'CB' },
          ],
        },
        featured: [this.post, this.project],
      },
    ],
    projects: {
      completed: [this.project, this.project2],
      inProgress: [this.project2,this.project],
    },
    communities: [],
    talents: [],
    interests: [],
  };
}
