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
    addNewMovie(m): Promise<void> {
        let headers = new Headers({'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'});
        console.log("from display service");
        console.log(m);
        //console.log(m.restaurant.id);
        return this.http.post('http://localhost:8080/v1.0/movieservice/Movies',JSON.stringify({
                        id: m.id,
                      movieName: m.original_title
                        //featured_image:res.restaurant.featured_image,
                       // cuisines:res.restaurant.cuisines,
                       // average_cost_for_two:res.restaurant.average_cost_for_two,
                        //rating:res.restaurant.user_rating.aggregate_rating,
                       // comments:null
                      }),{headers:headers})
                 .toPromise()
                 .then(
                       (err)=>console.log(err))
                 .catch((ress) =>console.log("error caught",ress))
        }
}