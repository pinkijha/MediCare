import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iappointment } from './iappointment'; 



@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentsService {

  constructor(private httpClient:HttpClient) { }
  GetAllAppointments():Observable<Iappointment[]>{
    return this.httpClient.get<Iappointment[]>("https://localhost:44305/api/Bookappointments",{
      headers:{"Access-Control-Allow-Origin":"*"}
    });
  }

  addAppointment(appointment : Iappointment){debugger;
    this.httpClient.post("https://localhost:44305/api/Bookappointments",appointment,{
      headers:{"Access_Control-Allow-Origin":"*"}
    }).subscribe((appointment) => {
        console.log(<Iappointment>appointment);
      });
  }

 

  removeCartItem(id:number){debugger;
    this.httpClient.delete("https://localhost:44305/api/Bookappointments/" + id,{
      headers:{"Access_Control-Allow-Origin":"*"}
    }).subscribe((appointment) => {
        console.log(<Iappointment>appointment);
      });
  }

 
  
}
