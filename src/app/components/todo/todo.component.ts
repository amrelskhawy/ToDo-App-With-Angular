import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toDo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() todo!: toDo;
  @Output() toggleEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggle(todo:any) {
    this.toggleEvent.emit(todo)
  }

}
