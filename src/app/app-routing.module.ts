import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TableComponent} from './table/table.component';
import {ExerciseComponent} from './exercise/exercise.component';
import {TablesComponent} from './tables/tables.component';
import {ExercisesComponent} from './exercises/exercises.component';

const routes: Routes = [
    {path: '', component: TablesComponent},
    {path: 'table/:id', component: TableComponent},
    {path: 'exercises', component: ExercisesComponent},
    {path: 'exercise/:id', component: ExerciseComponent},
    {path: '**', component: TablesComponent} // cuando la ruta no exista redirigira al componente raiz.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
