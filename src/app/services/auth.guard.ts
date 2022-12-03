import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public dataServis: DataService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var sonuc: boolean = false;
    if (this.dataServis.OturumKontrol()) {
      sonuc = true;
    } else {
      location.href = '/login';
    }
    return sonuc;
  }
}
