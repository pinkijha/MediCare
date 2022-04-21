import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Iappointment } from '../iappointment';
import { ViewAppointmentsService } from '../view-appointments.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointement:any;
  data: any;

  constructor(private router: Router,private route:ActivatedRoute,public http:HttpClient,private viewappointment: ViewAppointmentsService) { }

  ngOnInit(): void {
    this.viewappointment.GetAllAppointments().subscribe((data:any) => {
     
      this.appointement=data;


    });
  }
  deleteAppointment(id:any){
    this.viewappointment.removeAppointment(id);
   

  }
  
 
  updateappointment(data:any){debugger;
  
    this.router.navigate(['book'],{ queryParams:  data, skipLocationChange: true})

  }

   

}
 