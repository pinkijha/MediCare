import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
   checkoutForm = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.minLength(3)]),
  number: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  email: new FormControl('',[Validators.required,Validators.email]),
  doctorname:new FormControl('',[Validators.required,Validators.minLength(3)]),
  date: new FormControl('',[Validators.required]),
  time: new FormControl('',[Validators.required])

  });

  get name(): FormControl {
    return this.checkoutForm.get("name") as FormControl;
    
  }
 get number(): FormControl {
    return this.checkoutForm.get("number") as FormControl;
    
  }
  get email(): FormControl {
    return this.checkoutForm.get("email") as FormControl;
    
  }
  get doctorname(): FormControl {
    return this.checkoutForm.get("doctorname") as FormControl;
    
  }
  get date(): FormControl {
    return this.checkoutForm.get("date") as FormControl;
    
  }
  get time(): FormControl {
    return this.checkoutForm.get("time") as FormControl;
    
  }

  ngOnInit(): void {
  }
  // onSubmit(): void {debugger;
  //   // Process checkout data here
    
  //   // this.http.post('http://localhost:5000/book',this.checkoutForm.value).subscribe(data => {
      
    
  //   // });
    
  //   // console.warn('Your order has been submitted', this.checkoutForm.value);
  //   // this.checkoutForm.reset();
  // }
  
  saveChanges(){debugger;
    var appointment:Iappointment = {
     
      Name: this.checkoutForm.get("name")?.value,
      Number: this.checkoutForm.get("number")?.value,
      email: this.checkoutForm.get("email")?.value,
      Doctorname: this.checkoutForm.get("doctorname")?.value,
      Date: this.checkoutForm.get("date")?.value,
      Time: this.checkoutForm.get("time")?.value,
     
    };
    //alert(customer.name +" being added");
  this.appointmentService.addAppointment(appointment);
  
  }
 
}
