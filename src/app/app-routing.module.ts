import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ExperienceComponent }      from './experience/experience.component';
import { EducationComponent }      from './education/education.component';
import { ProjectComponent }      from './project/project.component';
import { PhotoComponent }      from './photo/photo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'photo', component: PhotoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}