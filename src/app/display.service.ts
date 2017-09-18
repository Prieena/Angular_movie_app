import { Movie } from './movie';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class DisplayService{
    
    query: string = "";

    private webUrl = 'https://api.themoviedb.org/3/search/movie?api_key=6f84500dda682130976f8243a46e558a&query=';

    constructor (private http: Http){}

    setQuery(value){
        this.query=value;
    }

    getMovies(): Promise <JSON> {
        return this.http.get(this.webUrl+this.query).toPromise()
                .then(response => response.json()['results'] );                
    }

}