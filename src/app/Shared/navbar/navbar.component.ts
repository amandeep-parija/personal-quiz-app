import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls:  ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDarkMode = false;


  ngOnInit(): void{
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark'){
      this.enableDarkMode();
    } 
  }

  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    if(this.isDarkMode){
      this.enableDarkMode();
      localStorage.setItem('theme','dark');
    }else{
      this.disableDarkMode();
      localStorage.setItem('theme','light');
    }
  }

  enableDarkMode(){
    document.body.classList.add('dark-mode');
  }


  disableDarkMode(){
    document.body.classList.remove('dark-mode');
  }
}
