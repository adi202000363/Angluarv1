import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  jokestring : string =" ";
  joke: any;

  getAJoke = () => {
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe( (result:any) => (this.joke = result.value))
  }
}
