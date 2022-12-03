import { Kategori } from './../models/kategori';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uye } from '../models/uye';

@Injectable()
export class DataService {
  public apiurl = 'http://localhost:3000/';
  public aktifUye: Uye = new Uye();
  constructor(public http: HttpClient) {}

  /*Uye giriş işlemler start */

  OturumAc(mail: any, parola: any) {
    return this.http.get<Uye[]>(
      this.apiurl + 'users?mail=' + mail + '&parola=' + parola
    );
  }
  OturumKontrol() {
    if (localStorage.getItem('adSoyad')) {
      this.AktifUyeBilgi();
      return true;
    } else {
      return false;
    }
  }

  AktifUyeBilgi() {
    if (localStorage.getItem('adSoyad')) {
      this.aktifUye.adSoyad = localStorage.getItem('adSoyad') || '';
      var admin = localStorage.getItem('admin') || '0';
      this.aktifUye.admin=admin;
    }
  }

  /*Uye giriş işlemler end */

  /*Kategori servis start */

  KategoriListele() {
    return this.http.get<Kategori[]>(this.apiurl + 'categories');
  }
  KategoriById(id: number) {
    return this.http.get<Kategori>(this.apiurl + 'categories/' + id);
  }
  KategoriEkle(kat: Kategori) {
    return this.http.post(this.apiurl + 'categories/', kat);
  }
  KategoriDuzenle(kat: Kategori) {
    return this.http.put(this.apiurl + 'categories/' + kat.id, kat);
  }
  KategoriSil(id: number) {
    return this.http.delete(this.apiurl + 'categories/' + id);
  }
  /*Kategori servis end */

  /*Uye servis start */

  UyeListele() {
    return this.http.get<Uye[]>(this.apiurl + 'users');
  }
  UyeById(id: number) {
    return this.http.get<Uye>(this.apiurl + 'users/' + id);
  }
  UyeEkle(uye: Uye) {
    return this.http.post(this.apiurl + 'users/', uye);
  }
  UyeDuzenle(uye: Uye) {
    return this.http.put(this.apiurl + 'users/' + uye.id, uye);
  }
  UyeSil(id: number) {
    return this.http.delete(this.apiurl + 'users/' + id);
  }
  /*Uye servis end */
}
