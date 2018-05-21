import { Injectable } from '@angular/core';
import { Creche } from '../models/Creche';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { MOCK } from "../dados/mock";

@Injectable()
export class CrecheService {

  creches: Creche[]

  constructor() {
    this.getCreches().subscribe(cre => { this.creches = cre; });
  }

  getCreches(): Observable<Creche[]> {
    if (localStorage.getItem("creches") === null) {
      this.creches = MOCK;
    } else {
      this.creches = JSON.parse(localStorage.getItem("creches"));
    }
    return of(this.creches);
  }

  addCreches(cre: Creche) {
    this.creches.push(cre);
    localStorage.setItem("creches", JSON.stringify(this.creches));
  }

}
