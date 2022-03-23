import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: any;

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  getDoctors() : void{
    this.http.get('http://localhost:5000/doctors').subscribe(data => {
      this.doctors = data;
      console.log(this.doctors);
    
    });

  }
}
