import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private BASE_URL = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // 🟢 User Signup
  signup(userData: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/public/signup`, userData);
  }

  // 🟢 User Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/public/login`, credentials);
  }

  // 🟢 Fetch User Data (Example API call)
  getJournalEntries(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/journal/get-all`);
  }

  saveJournalEntry(journalEntry: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/journal/submit-entry`, journalEntry);
  }
}
