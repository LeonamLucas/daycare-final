import { Component, OnInit } from '@angular/core';
import { CrecheService } from '../../services/creche.service';

@Component({
  selector: 'mt-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  creches

  constructor(private crecheService: CrecheService) {
    this.crecheService.getCreches().subscribe(cre => {
      this.creches = cre
    })
  }

  ngOnInit() {

  }

}
