import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  comedyMovieResult: any;
  thrillerMovieResult: any;
  actionMovieResult: any;

  constructor(private service:MovieApiService) { }


  bannerResult: any=[];
  trendingMovieResult: any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovieData();
    this.adventureMovieData();
    this.animationMovieData();
    this.comedyMovieData();
    this.documentaryMovieData();
    this.scienceFictionMovieData();
    this.thrillerMovieData();
  }

  // Banner Data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerResult#');
      this.bannerResult = result.results;
    });
  }
  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result, 'trendingResult#');
      this.trendingMovieResult = result.results;
    });
  }
    // Action Movies
  actionMovieData(){
    this.service.fetchActionMovies().subscribe((result)=>{
      this.actionMovieResult = result.results;
    });
  }

  // Adventure Movies
  adventureMovieData(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieData = result.results;
    });
  }

  // Animation Movies
  animationMovieData(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieData = result.results;
    });
  }

  // Comedy Movies
  comedyMovieData(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      this.comedyMovieResult = result.results;
    });
  }

  // Documentary Movies
  documentaryMovieData(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      this.documentaryMovieData = result.results;
    });
  }

  // Science-Fiction Movies
  scienceFictionMovieData(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      this.scienceFictionMovieData = result.results;
    });
  }

  // Thriller Movies
  thrillerMovieData(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      this.thrillerMovieResult = result.results;
    });
  }





}

