import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  data:any;
  evo: any;
  id:any;

  constructor(
    private route:ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getInfo();
    this.getEvolution();
  }

  getInfo(){
    this.dataService.getInfo(this.id).subscribe(data=> {
      this.data = data;
      console.log(this.data);
    })
  }

  getEvolution(){
    this.dataService.getEvolution(this.id).subscribe(evo=> {
      this.evo = evo;
      console.log(this.evo);
    })
  }

}
