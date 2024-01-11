import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.scss']
})
export class SearchPostsComponent implements OnInit {

  @Input('items') items : any[]

  constructor() { }

  ngOnInit(): void {
  }

  public post = {
    type: 'Gönderi',
    image: 'assets/img/alekted_post.png',
    title: 'ALECTED TAKIMIMIZ BAŞARILARIYLA ÜLKEMİZİ TEMSİL EDİYOR!',
    content:
      'Shell’in düzenlemiş olduğu “Tracking and Reducing CO2 Emissions from Vehicles” konulu yarışmada, Üniversitemiz öğrencilerinin oluşturmuş olduğu AlecTED’in, Avrupa - Afrika bölgelerinde 1. olduğunu ve tek Türk takım olarak dünya finalinde Ülkemizi, bölgemizi ve Üniversitemizi temsil edeceğini duyurmaktan gurur duyuyoruz.',
  };

}
