import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HaircutSalonService } from 'src/app/services/haircut-salon.service';

@Component({
  selector: 'app-haircut-detail',
  templateUrl: './haircut-detail.component.html',
  styleUrls: ['./haircut-detail.component.css']
})
export class HaircutDetailComponent implements OnInit {
  public salon: any

  constructor(private route: ActivatedRoute, private hairService: HaircutSalonService) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const salonIdFromRoute = Number(routeParams.get('salonId'));
    this.salon = this.hairService.findById(salonIdFromRoute);


  }

}
