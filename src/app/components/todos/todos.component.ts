import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [
    {
    id: 1,
    text: 'First Task',
    completed: true
    },
    {
      id: 2,
      text: 'Second Task',
      completed: false
    },
]
  constructor() { }

  ngOnInit(): void {
  }
  toggleToDo($event: any) {
    console.log($event);
  }

}
