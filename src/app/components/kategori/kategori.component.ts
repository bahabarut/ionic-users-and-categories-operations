import { Sonuc } from './../../models/sonuc';
import { DataService } from './../../services/data.service';
import { Kategori } from './../../models/kategori';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss'],
})
export class KategoriComponent implements OnInit {
  kategoriler!: Kategori[];
  sonuc: Sonuc = new Sonuc();
  constructor(public dataServis: DataService) {}

  ngOnInit() {
    this.KategoriListele();
  }

IonViewWillEnter(){
  this.KategoriListele();
}

  KategoriListele() {
    this.dataServis.KategoriListele().subscribe((d) => {
      this.kategoriler = d;
    });
  }
  KategoriEkle(k: any) {
    var tarih = new Date();
    var filter = this.kategoriler.filter((s) => s.kategoriAdi == k);
    if (filter.length > 0) {
      this.sonuc.islem = false;
      this.sonuc.mesaj = 'Girilen Kategori Adı Kayıtlıdır';
      alert(this.sonuc.mesaj)
    } else {
      var yeniKat: Kategori = new Kategori();
      yeniKat.kategoriAdi = k;
      yeniKat.duzTarih = tarih.getTime().toString();
      yeniKat.kayTarih = tarih.getTime().toString();
      this.dataServis.KategoriEkle(yeniKat).subscribe((d) => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = 'Kategori Eklendi';
      alert(this.sonuc.mesaj)
        this.KategoriListele();
      });
    }
  }

}
