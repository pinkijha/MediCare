import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewAppointmentsService } from 'src/app/view-appointments.service';
import { Iappointment } from 'src/app/iappointment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  [x: string]: any;
 


  constructor(private formBuilder: FormBuilder,public http:HttpClient,private router: Router,private appointmentService:ViewAppointmentsService) {
    
   }
   checkoutForm = this.formBuilder.group({
    name: '',
    number: 0,
    email: '',
    doctorname:'',
    date: '',
    time: ''
  });

  ngOnInit(): void {
  }
  // onSubmit(): void {debugger;
  //   // Process checkout data here
    
  //   // this.http.post('http://localhost:5000/book',this.checkoutForm.value).subscribe(data => {
      
    
  //   // });
    
  //   // console.warn('Your order has been submitted', this.checkoutForm.value);
  //   // this.checkoutForm.reset();
  // }

  saveChanges(){
    var appointment:Iappointment = {
      Id: this.checkoutForm.get("UserId")?.value,
      Name: this.checkoutForm.get("name")?.value,
      Number: this.checkoutForm.get("number")?.value,
      Email: this.checkoutForm.get("email")?.value,
      Doctorname: this.checkoutForm.get("doctorname")?.value,
      Date: this.checkoutForm.get("date")?.value,
      Time: this.checkoutForm.get("time")?.value,
     
    };
    //alert(customer.name +" being added");
  this.appointmentService.addAppointment(appointment);
  
  }
 
}
