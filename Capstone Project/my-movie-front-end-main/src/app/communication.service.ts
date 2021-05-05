import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  baseUrl = 'http://localhost:9000/';
  dateChoosen;
  timeChoosen;
  movieChoosen;
  theaterIdChoosen;
  theaterChoosen;
  choosenSeats;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private httpClient: HttpClient) { }

  getAllMoviesList() {
    return this.httpClient.get(`${this.baseUrl}movies/`, {headers: this.headers});
  }

  getAllActiveMovies() {
    return this.httpClient.get(`${this.baseUrl}movies/active/`, {headers: this.headers});
  }

  getMovieById(id:number) {
    return this.httpClient.get(`${this.baseUrl}movies/${id}`, {headers: this.headers});
  }

  addMovie(name: string, duration: string, language: string, genre: string){
    const body = ({name, duration, language, genre});
    return this.httpClient.post(`${this.baseUrl}movies/`, body, {headers: this.headers});
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.baseUrl}movies/${id}`, {headers: this.headers});
  }

  editMovie(id: number, name: string, duration: string, language: string, genre: string){
    const body = ({name, duration, language, genre});
    return this.httpClient.put(`${this.baseUrl}movies/${id}`, body, {headers: this.headers});
  }

  getAllTheatersList() {
    return this.httpClient.get(`${this.baseUrl}theater/`, {headers: this.headers});
  }

  getBookSeatsByDateTime(theaterId:number, date:Date, time:string) {
    const body = ({date, time});
    return this.httpClient.post(`${this.baseUrl}bookedseats/getbydatetimetheaterid/${theaterId}`, body, {headers: this.headers});
  }

  postBookSeatsByDateTime(theaterId:number, date:Date, time:string, seats) {
    const body = ({date, time, seats});
    return this.httpClient.post(`${this.baseUrl}bookedseats/postbydatetimetheaterid/${theaterId}`, body, {headers: this.headers});
  }

  getAllTheatersListByMovieId(movieId) {
    return this.httpClient.get(`${this.baseUrl}theater/bymovie/${movieId}`, {headers: this.headers});
  }

  getTheaterById(id:number) {
    return this.httpClient.get(`${this.baseUrl}theater/${id}`, {headers: this.headers});
  }

  addTheater(movieId:number, theatreName: string, theatreAddress: string){
    const body = ({theatreName, theatreAddress});
    return this.httpClient.post(`${this.baseUrl}theater/${movieId}`, body, {headers: this.headers});
  }

  deleteTheater(id: number) {
    return this.httpClient.delete(`${this.baseUrl}theater/${id}`, {headers: this.headers});
  }

  editTheater(theaterId: number, movieId: number, theatreName: string, theatreAddress: string){
    const body = ({theatreName, theatreAddress});
    return this.httpClient.put(`${this.baseUrl}theater/${theaterId}/${movieId}`, body, {headers: this.headers});
  }

  login(email: string, password: string){
    const body = {email, password};
    return this.httpClient.post(`${this.baseUrl}user/authenticate`, body, {headers: this.headers});
  }

  signup(firstName:string, lastName:string, email: string, password: string, role: string){
    const body = {firstName, lastName, email, password, role};
    return this.httpClient.post(`${this.baseUrl}user/signup`, body, {headers: this.headers});
  }

}
