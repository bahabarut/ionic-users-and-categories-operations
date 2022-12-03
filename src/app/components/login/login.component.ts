import { Sonuc } from 'src/app/models/sonuc';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Uye } from 'src/app/models/uye';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public dataServis: DataService) {}

  ngOnInit() {}

  OturumAc(mail: any, parola: any) {
    this.dataServis.OturumAc(mail, parola).subscribe((d) => {
      if (d.length > 0) {
        var kayit: Uye = d[0];
        localStorage.setItem('adSoyad', kayit.adSoyad);
        localStorage.setItem('admin', kayit.admin.toString());
        location.href = '/';
      } else {
        var s: Sonuc = new Sonuc();
        s.islem = false;
        s.mesaj = 'E-Posta Adresi Veya Parola Geçersizdir';
        alert(s.mesaj);
      }
    });
  }
 
}
