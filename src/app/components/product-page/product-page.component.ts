import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  code: any;
  paramsSub: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => {
        // this.id = parseInt(params['code'], 10)
       this.code= params['code'];
      }
    );


   
  }

}
