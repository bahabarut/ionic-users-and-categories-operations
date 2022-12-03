import { Sonuc } from 'src/app/models/sonuc';
import { Uye } from './../../models/uye';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-uye',
  templateUrl: './uye.component.html',
  styleUrls: ['./uye.component.scss'],
})
export class UyeComponent implements OnInit {
  uyeler!: Uye[];
  sonuc: Sonuc = new Sonuc();
  constructor(public dataServis: DataService) {}

  ngOnInit() {
    this.UyeListe();
  }

  UyeListe() {
    this.dataServis.UyeListele().subscribe((d) => {
      this.uyeler = d;
    });
  }

  UyeEkle(adsoyad: any, mail: any, parola: any, admin: any) {
    var tarih = new Date();
    var filtre = this.uyeler.filter(
      (s) => s.adSoyad == adsoyad || s.mail == mail
    );
    if (filtre.length > 0) {
      this.sonuc.islem = false;
      this.sonuc.mesaj = 'Girilen Bilgilerle Üye Kayıtlıdır';
      alert(this.sonuc.mesaj);
    } else {
      var yeniKayit: Uye = new Uye();
      yeniKayit.adSoyad = adsoyad;
      yeniKayit.mail = mail;
      yeniKayit.admin = admin;
      yeniKayit.parola = parola;
      yeniKayit.duzTarih = tarih.getTime().toString();
      yeniKayit.kayTarih = tarih.getTime().toString();
      this.dataServis.UyeEkle(yeniKayit).subscribe((d) => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = 'Üye Eklendi';
        alert(this.sonuc.mesaj);
        this.UyeListe();
      });
    }
  }
}
