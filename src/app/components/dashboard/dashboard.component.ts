import { Component, OnInit } from '@angular/core';
import { MainapiService } from 'src/app/services/mainapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  policyTypes:any[]=[];

  constructor(private api:MainapiService , private router : Router) { }

  ngOnInit(): void {
    this.getPlansType();
  }
  getPlansType()
  {
    this.api.getPlanTypes().subscribe(data => {
      console.log(data);
      this.policyTypes = data;
    });

  }

  redirectPlan(code)
  {
   // this.route.navigate(['/dashboard/product', code]);
    this.router.navigateByUrl('/dashboard/product', code);
  }
}
