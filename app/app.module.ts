import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

@NgModule({

  imports: [ 
  	
  	BrowserModule,
  	RouterModule.forRoot([
  		{
		  	path: '',
		 	redirectTo: '/home',
		  	pathMatch: 'full'
		},
	    {
	        path: 'home',
	        component: HomeComponent
	    },
	    {
	        path: 'about',
	        component: AboutComponent
	    }
    ])

  ],

  declarations: [ AppComponent, HomeComponent, AboutComponent ],
 
  bootstrap: [ AppComponent ]

})


export class AppModule { }
