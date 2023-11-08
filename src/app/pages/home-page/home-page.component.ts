import { Component, OnInit } from '@angular/core';
import { HaircutSalonService } from 'src/app/services/haircut-salon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public salons: any = []

  constructor(private haircutService: HaircutSalonService) {

  }
  ngOnInit(): void {
    this.salons = this.haircutService.findAll()
  }

}
