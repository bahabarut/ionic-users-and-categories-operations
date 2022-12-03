import { AuthGuard } from './services/auth.guard';
import { UyeduzenlesilComponent } from './components/uyeduzenlesil/uyeduzenlesil.component';
import { KatduzenlesilComponent } from './components/katduzenlesil/katduzenlesil.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UyeComponent } from './components/uye/uye.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  CanActivate,
} from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'kategoriler',
    component: KategoriComponent,
    canActivate: [AuthGuard],
  },
  { path: 'uyeler', component: UyeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'katduzenlesil/:id/:islem', component: KatduzenlesilComponent },
  { path: 'uyeduzenlesil/:id/:islem', component: UyeduzenlesilComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
