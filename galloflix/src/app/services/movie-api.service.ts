import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http:HttpClient) { }
  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "626a725174aa33ca2b571cba06d774e9";

  //banner API Data
  bannerApiData(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=pt-BR`);
  }
// trending Movies API Data
trendingMovieApiData():Observable<any>
{
  return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}&language=pt-BR`);
}
movieDetails(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}&language=pt-BR`);
}
  // Movie Trailer API Data
  movieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}&language=pt-BR`);
  }

  // Movie Cast API Data
  movieCasts(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/Casts?api_key=${this.apiKey}&language=pt-BR`);
  }
  // search Movie API Data
  searchMovie(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}&language=pt-BR`);
  }

    // Action Movies
    fetchActionMovies():Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28&language=pt-BR`);
    }

    // Adventure Movies
    fetchAdventureMovies():Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12&language=pt-BR`);
    }

    // Animation Movies
    fetchAnimationMovies():Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16&language=pt-BR`);
    }

    // Comedy Movies
    fetchComedyMovies():Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35&language=pt-BR`);
    }

    // Documentary Movies
    fetchDocumentaryMovies():Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99&language=pt-BR`);
    }

    // Science-Fiction Movies
    fetchScienceFictionMovies():Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878&language=pt-BR`);
    }

    // Thriller Movies
    fetchThrillerMovies():Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53&language=pt-BR`);
    }

}
