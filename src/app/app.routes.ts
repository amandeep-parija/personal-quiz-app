import { Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { QuestioncardComponent } from './components/questioncard/questioncard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'quiz', component:QuizComponent},
    {path:'result', component:ResultComponent},
    {path:'questioncard', component:QuestioncardComponent},
    {path:'about', component:AboutComponent},
    { path: '**', redirectTo: 'home' }

];
