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
  ngOnInit(): void {}


  toggleToDo(data: {
    id: number,
    text: string,
    completed: boolean}
    ) {
    
    this.todos = this.todos.map(task => {
      if (task.id === data.id) 
        task.completed = !task.completed 
      return task

      
    })


  }
  deleteToDo(todo: {id:number, text:string, completed:boolean}) {
    this.todos = this.todos.filter(task => {
      return task.id !== todo.id
    })
  }

  onKeyUp(data: string) {
    document.querySelector('.test')!.textContent = data
  }

}
