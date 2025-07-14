import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDarkMode = false;


  ngOnInIt(){
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark'){
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    } 
  }

  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if(this.isDarkMode){
      body.classList.add('dark-mode');
      localStorage.setItem('theme','dark');
    }else{
      body.classList.remove('dark-theme');
      localStorage.setItem('theme','light');
    }
  }
}
