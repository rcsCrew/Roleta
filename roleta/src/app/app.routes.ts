import { Routes } from '@angular/router';
import { RoletaComponent } from './pages/roleta/roleta.component';

export const routes: Routes = [
  {
    path: "", redirectTo: "roleta", pathMatch: "full"
  },
  {
    path: "roleta", component: RoletaComponent
  }
];
