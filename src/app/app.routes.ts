import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActualityComponent } from './pages/actuality/actuality.component';
import { PatchNotesComponent } from './pages/patch-notes/patch-notes.component';
import { InfoPatchComponent } from './pages/info-patch/info-patch.component';
import { InfoActualityComponent } from './pages/info-actuality/info-actuality.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'actualites', component: ActualityComponent },
    { path: 'actualite/:id', component: InfoActualityComponent },
    { path: 'patch-notes', component: PatchNotesComponent },
    { path: 'patch-note/:id', component: InfoPatchComponent },
    { path: "**", redirectTo: "" },
    { path: "", redirectTo: "", pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
        HttpClientModule,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }