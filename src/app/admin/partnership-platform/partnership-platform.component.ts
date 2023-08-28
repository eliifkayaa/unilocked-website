import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'partnership-platform',
  templateUrl: './partnership-platform.component.html',
  styleUrls: ['./partnership-platform.component.scss'],
  animations: [
    trigger('checkboxAnimation', [
      state('checked', style({ transform : 'scale(1.3)',})),
      state('unchecked', style({ transform: 'scale(1)' })),
      transition('unchecked => checked', animate('200ms ease-in')),
      transition('checked => unchecked', animate('200ms ease-out'))
    ])
  ]
  
})
export class PartnershipPlatformComponent {

  activePage = 'advert'
  public partnerRows = [
      {
        id : 1,
        checked: false,
        from : "Turkcell(Siz)",
        to : "Vestel",
        type : "Etkinlik",
        date : "26.06.2023",
        state : "reject"
      },
      {
        id : 2,
        checked: false,
        from : "Lifecell",
        to : "Turkcell(Siz)",
        type : "İlan",
        date : "20.01.2024",
        state : "wait"
      },
      {
        id : 3,
        checked: false,
        from : "AlecTED",
        to : "Turkcell(Siz)",
        type : "Proje",
        date : "20.01.2024",
        state : "process"
      },
      {
        id : 4,
        checked: false,
        from : "Apple",
        to : "Turkcell(Siz)",
        type : "Gönderi",
        date : "20.01.2024",
        state : "accept"
      },
      {
        id : 5,
        checked: false,
        from : "Turkcell(Siz)",
        to : "Vestel",
        type : "Etkinlik",
        date : "26.06.2023",
        state : "reject"
      },
      {
        id : 6,
        checked: false,
        from : "Lifecell",
        to : "Turkcell(Siz)",
        type : "İlan",
        date : "20.01.2024",
        state : "wait"
      },
      {
        id : 7,
        checked: false,
        from : "AlecTED",
        to : "Turkcell(Siz)",
        type : "Proje",
        date : "20.01.2024",
        state : "process"
      },
      {
        id : 8,
        checked: false,
        from : "Apple",
        to : "Turkcell(Siz)",
        type : "Gönderi",
        date : "20.01.2024",
        state : "accept"
      },
      {
        id : 9,
        checked: false,
        from : "Turkcell(Siz)",
        to : "Vestel",
        type : "Etkinlik",
        date : "26.06.2023",
        state : "reject"
      },
      {
        id : 10,
        checked: false,
        from : "Lifecell",
        to : "Turkcell(Siz)",
        type : "İlan",
        date : "20.01.2024",
        state : "wait"
      },
      {
        id : 11,
        checked: false,
        from : "AlecTED",
        to : "Turkcell(Siz)",
        type : "Proje",
        date : "20.01.2024",
        state : "process"
      },
      {
        id : 12,
        checked: false,
        from : "Apple",
        to : "Turkcell(Siz)",
        type : "Gönderi",
        date : "20.01.2024",
        state : "accept"
      },
      {
        id : 13,
        checked: false,
        from : "Turkcell(Siz)",
        to : "Vestel",
        type : "Etkinlik",
        date : "26.06.2023",
        state : "reject"
      },
      {
        id : 14,
        checked: false,
        from : "Lifecell",
        to : "Turkcell(Siz)",
        type : "İlan",
        date : "20.01.2024",
        state : "wait"
      },
      {
        id : 15,
        checked: false,
        from : "AlecTED",
        to : "Turkcell(Siz)",
        type : "Proje",
        date : "20.01.2024",
        state : "process"
      },
      {
        id : 16,
        checked: false,
        from : "Apple",
        to : "Turkcell(Siz)",
        type : "Gönderi",
        date : "20.01.2024",
        state : "accept"
      }  
  ]

  public advertRows = [
      {
        id : 1,
        checked: false,
        content : "İlan • İnsan Kaynakları Stajı",
        mass : "Öğrenciler",
        date : "15.05.2023 - 22.05.2023",
        state : "accept"
      },
      {
        id : 2,
        checked: false,
        content : "Gönderi • 2023’de Türkiye",
        mass : "Herkes",
        date : "01.05.2023 - 31.05.2023",
        state : "process"
      },
      {
        id : 3,
        checked: false,
        content : "İlan • İnsan Kaynakları Stajı",
        mass : "Öğrenciler",
        date : "15.05.2023 - 22.05.2023",
        state : "accept"
      },
      {
        id : 4,
        checked: false,
        content : "Gönderi • 2023’de Türkiye",
        mass : "Herkes",
        date : "01.05.2023 - 31.05.2023",
        state : "process"
      },
      {
        id : 5,
        checked: false,
        content : "İlan • İnsan Kaynakları Stajı",
        mass : "Öğrenciler",
        date : "15.05.2023 - 22.05.2023",
        state : "accept"
      },
      {
        id : 6,
        checked: false,
        content : "Gönderi • 2023’de Türkiye",
        mass : "Herkes",
        date : "01.05.2023 - 31.05.2023",
        state : "process"
      },
  ]

  allBox = false

  changeBox(id) {
    if (id == 0) {
      if(this.allBox) {
        if(this.activePage == 'advert')
        {
          this.advertRows.forEach(element => {
            element.checked = false
          });
        }
        else {
          this.partnerRows.forEach(element => {
            element.checked = false
          });
        }
      }
      else {
        if(this.activePage == 'advert') {
          this.advertRows.forEach(element => {
            element.checked = true
          });
        }
        else if(this.activePage == 'partner') {
          this.partnerRows.forEach(element => {
            element.checked = true
          });
        }
      }
      this.allBox = !this.allBox
    }
    else {
      this.advertRows[id-1].checked = !this.advertRows[id-1].checked

      if(this.activePage == 'advert'){
        for(const element of this.advertRows) {
          if(!element.checked) {
            this.allBox = false
            break
          }
          else {
            this.allBox = true
          }
        }
      }
      else if(this.activePage == 'partner') {
        this.partnerRows[id-1].checked = !this.partnerRows[id-1].checked

        if(this.activePage == 'partner'){
          for(const element of this.partnerRows) {
            if(!element.checked) {
              this.allBox = false
              break
            }
            else {
              this.allBox = true
            }
          }
        }

      }
    }

    
  }

  changeActivePage(page) {
    this.activePage = page
    console.log(this.activePage)
  }
  
}
