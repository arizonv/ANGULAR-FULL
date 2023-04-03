import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor(private authService: ApiService,private router: Router) {
    const token = localStorage.getItem('token');

  }

  logout() {
    this.router.navigate(['login'], { replaceUrl: true });
    localStorage.clear();
  }

}
