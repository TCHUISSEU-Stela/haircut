import { Component, OnInit } from '@angular/core';
import { HaircutSalonService } from 'src/app/services/haircut-salon.service';

@Component({
  selector: 'app-hair-salon',
  templateUrl: './hair-salon.component.html',
  styleUrls: ['./hair-salon.component.css']
})
export class HairSalonComponent implements OnInit {

  public salons: any = []

  constructor(private haircutService: HaircutSalonService) {

  }
  ngOnInit(): void {
    this.salons = this.haircutService.findAll()
  }





}
