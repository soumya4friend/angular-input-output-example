import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('parentData')
  pData:string;

  @Output()
  childEvent = new EventEmitter();

  myChild(value:any){
    this.childEvent.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
