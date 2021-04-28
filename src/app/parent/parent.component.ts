import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  cData: string;
  constructor() { }

  textbind(value:any){
    this.cData=value;
  }


  ngOnInit(): void {
  }

}
