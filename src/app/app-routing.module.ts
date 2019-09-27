import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { ThreeComponent } from './pages/three/three.component';
import { FourComponent } from './pages/four/four.component';
import { FiveComponent } from './pages/five/five.component';
import { SixComponent } from './pages/six/six.component';
import { SevenComponent } from './pages/seven/seven.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent },
  { path: 'five', component: FiveComponent },
  { path: 'six', component: SixComponent },
  { path: 'seven', component: SevenComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
