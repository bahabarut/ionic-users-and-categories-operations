import { Uye } from './../../models/uye';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kategori } from 'src/app/models/kategori';
import { Sonuc } from 'src/app/models/sonuc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-uyeduzenlesil',
  templateUrl: './uyeduzenlesil.component.html',
  styleUrls: ['./uyeduzenlesil.component.scss'],
})
export class UyeduzenlesilComponent implements OnInit {
  uyeId!: number;
  islem!: string;
  secUye: Uye = new Uye();
  uyeSonuc: Sonuc = new Sonuc();
  uyeler!: Uye[];
  constructor(public dataServis: DataService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.uyeId = p.id;
      this.islem = p.islem;
      this.dataServis.UyeById(this.uyeId).subscribe((d) => {
        this.secUye = d;
        console.log(this.secUye);
      });
    });
    this.UyeListele();
  }
  IonViewWillEnter() {
    this.UyeListele();
  }
  UyeListele() {
    this.dataServis.UyeListele().subscribe((d) => {
      this.uyeler = d;
    });
  }

  Kaydet(uyeadi: any, uyemail: any, uyeparola: any, uyeadmin: any) {
    this.secUye.adSoyad = uyeadi;
    this.secUye.mail = uyemail;
    this.secUye.parola = uyeparola;
    this.secUye.admin = uyeadmin;
    var tarih = new Date();
    this.secUye.duzTarih = tarih.getTime().toString();
    this.dataServis.UyeDuzenle(this.secUye).subscribe((d) => {
      this.uyeSonuc.islem = true;
      this.uyeSonuc.mesaj = 'Üye Düzenlendi';
      alert(this.uyeSonuc.mesaj);
      console.log(this.secUye);
    });
  }

  Sil() {
    this.dataServis.UyeSil(this.secUye.id).subscribe((d) => {
      this.uyeSonuc.islem = true;
      this.uyeSonuc.mesaj = 'Üye Silindi';
      alert(this.uyeSonuc.mesaj);
      this.UyeListele();
    });
  }
}
