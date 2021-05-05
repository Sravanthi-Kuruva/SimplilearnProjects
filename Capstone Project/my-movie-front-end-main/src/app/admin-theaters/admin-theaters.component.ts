import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-admin-theaters',
  templateUrl: './admin-theaters.component.html',
  styleUrls: ['./admin-theaters.component.css']
})
export class AdminTheatersComponent implements OnInit {
  theatersList;
  addtheaterForm:FormGroup;

  constructor(private apiService:CommunicationService,  private fb:FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.addtheaterForm=this.fb.group({
      'theatreName':[null, Validators.required],
      'theatreAddress':[null, Validators.required]
    });

    this.apiService.getAllTheatersList().subscribe(
      (result)=>{this.theatersList = result;
      console.log(this.theatersList)},
      (error)=>console.log(error)
    );
  }

  reloadtheatersList(){
    this.apiService.getAllTheatersList().subscribe(
      (result)=>{this.theatersList = result;
      console.log(result)},
      (error)=>console.log(error)
    );
  }

  addTheater(){
    this.router.navigate([`admin/theaters/addtheater`]);
  }

  onClickEdit(theater_id){
    this.router.navigate([`admin/theaters/edittheater/${theater_id}`]);
  }

  deletetheater(theater_id){
    this.apiService.deleteTheater(theater_id).subscribe(
      (result) => {
        console.log(result);
        console.log("theater deleted successfully")
        this.reloadtheatersList();
      }, (error)=>{
        console.log(error);
      }
    )
  }
}
