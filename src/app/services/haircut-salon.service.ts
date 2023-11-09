import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HaircutSalonService {
  private salons: any = []

  constructor() {
    this.salons.push(
      {
        id: 1, name: "name 1", image: "haircut/h2.jpeg", delay: 0, location :"Pitoare"
      },
      {
        id: 2, name: "name 2", image: "haircut/h2.jpeg", delay: 100, location :"Domayo"
      },
      {
        id: 3, name: "name 3", image: "haircut/h2.jpeg", delay: 200,location :"Dogoui"

      }
    );
   


  }
  findAll() {

   
    return this.salons
  }
  findById(id: Number) {
    for (const key in this.salons)
      if(this.salons[key]['id'] == id)
        return this.salons[key]


  }
}
