import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  title: string = "Github Search API"
  username: string = "Komenpurity"
  repositories!: any[];
  mySubscription = new Subscription()

  constructor(private usersService:UsersService) { }
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe() 
  }


  getPublicRepositories(){
    this.mySubscription.add(
      this.usersService.getUsers(this.username).subscribe((response)=>{
        this.repositories = response
      })
    )
  }

  ngOnInit(): void {
    this.getPublicRepositories()
  }

}



