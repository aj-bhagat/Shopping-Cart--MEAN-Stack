import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'men', component: MenComponent },
  { path: 'women',      component: WomenComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'home/men', component: MenComponent },
  { path: 'home/women',      component: WomenComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenComponent,
    WomenComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
