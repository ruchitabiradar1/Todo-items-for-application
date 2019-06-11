import { Component, OnInit } from '@angular/core';
import {ServetodoService} from '../../services/servetodo.service'
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:ServetodoService) { 
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => 
     {this.todos=todos;
      } );
    }

    deleteatodo(atodo:Todo)
    {
      this.todos= this.todos.filter(t=> t.id!=atodo.id);
      this.todoService.deleteoneTodo(atodo).subscribe();
    }

}
