import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../classes/suggestion';
import { Person } from '../classes/person';
import { Setting } from '../classes/setting';
import { Scenario } from '../classes/scenario';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suggestion:Suggestion;


  constructor(private sugServ:SuggestionService) { }

  ngOnInit(): void {
    
  }

  getSuggestion1():void{
    
    let c1=new Person(1,'Jack','Character 1');
    let c2=new Person(2,'Jill','Character 2');
    let set=new Setting(1,'Hill','Top of hill');
    let sce=new Scenario(1,'Water Needed','Need to get water from well');
    //console.log("button worked");
    this.suggestion=new Suggestion(c1,c2,set,sce);
  }

  getSuggestion():void{
    this.sugServ.retrieveSuggestion().subscribe(
      resp=>this.suggestion=resp
    )

  }

  deleteSuggestion():void{
    this.suggestion=null;
  }

}
