import { UyeduzenlesilComponent } from './components/uyeduzenlesil/uyeduzenlesil.component';
import { AuthGuard } from './services/auth.guard';
import { KatduzenlesilComponent } from './components/katduzenlesil/katduzenlesil.component';
import { LoginComponent } from './components/login/login.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { UyeComponent } from './components/uye/uye.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, KategoriComponent, UyeComponent,HomeComponent,LoginComponent,KatduzenlesilComponent,UyeduzenlesilComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DataService,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
