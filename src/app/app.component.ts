import { Component, Directive, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'movie-list';

  movieList = [
    { id: 1, title: 'The GodFather', year: '1972', director: 'Francis Ford Coppola'},
    { id: 2, title: 'Millers Crossing', year: '1990', director: 'The Coen Brothers'},
    { id: 3, title: 'Diam M for Murder', year: '1954', director: 'Alfred Hitchcock'},
    { id: 4, title: 'Whiplash', year: '2014', director: 'Damien Chazelle'}  
  ];
}
