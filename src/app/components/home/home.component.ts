import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "Github Search API"
  username: string = "Komenpurity"
  repositories!: any[];

  constructor(private usersService:UsersService) { }


  getPublicRepositories(){
    this.usersService.getUsers(this.username).subscribe((response)=>{
      //console.log(response) 
      this.repositories = response
    })
  }

  ngOnInit(): void {
    this.getPublicRepositories()
  }

}
