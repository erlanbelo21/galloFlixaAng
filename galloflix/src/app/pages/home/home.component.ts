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

  }






