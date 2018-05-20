import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrecheService } from './services/creche.service';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CrecheComponent } from './componentes/creche/creche.component';
import { CardCrecheComponent } from './componentes/card-creche/card-creche.component';
import { IndexComponent } from './componentes/index/index.component';
import { IdCrecheComponent } from './componentes/id-creche/id-creche.component';
import { MapaComponent } from './componentes/mapa/mapa.component'


const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'creche', component: CrecheComponent },
  { path: 'creche/:id', component: IdCrecheComponent },
  { path: 'mapa', component: MapaComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrecheComponent,
    CardCrecheComponent,
    IndexComponent,
    IdCrecheComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBIbmZFYduS3VCIWPiPPymTvjW-NE0igfk",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CrecheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
