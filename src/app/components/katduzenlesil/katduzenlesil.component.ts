import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kategori } from 'src/app/models/kategori';
import { Sonuc } from 'src/app/models/sonuc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-katduzenlesil',
  templateUrl: './katduzenlesil.component.html',
  styleUrls: ['./katduzenlesil.component.scss'],
})
export class KatduzenlesilComponent implements OnInit {
  kategoriId!: number;
  islem!: string;
  secKategori: Kategori = new Kategori();
  kategoriSonuc: Sonuc = new Sonuc();
  kategoriler!: Kategori[];
  constructor(public dataServis: DataService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.kategoriId = p.id;
      this.islem = p.islem;
      this.dataServis.KategoriById(this.kategoriId).subscribe((d) => {
        this.secKategori = d;
        console.log(d)
      });
    });
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

  Kaydet(adi: any) {
 this.secKategori.kategoriAdi=adi;
    var tarih = new Date();
    this.secKategori.duzTarih = tarih.getTime().toString();
    this.dataServis.KategoriDuzenle(this.secKategori).subscribe((d) => {
      this.kategoriSonuc.islem = true;
      this.kategoriSonuc.mesaj = 'Kategori Düzenlendi';
      alert(this.kategoriSonuc.mesaj);
    });
  }
  Sil() {
    this.dataServis.KategoriSil(this.secKategori.id).subscribe((d) => {
      this.kategoriSonuc.islem = true;
      this.kategoriSonuc.mesaj = 'Kategori Silindi';
      alert(this.kategoriSonuc.mesaj);
      this.KategoriListele();
    });
  }
}
