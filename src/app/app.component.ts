import { DataService } from 'src/app/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public dataServis: DataService) {}
  OturumKapat() {
    localStorage.clear();
    location.href = '/';
  }
}
