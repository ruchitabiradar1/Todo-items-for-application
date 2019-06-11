import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {ServetodoService} from '../../services/servetodo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() atodo:Todo;
  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter();
  constructor(private todoService:ServetodoService) { }

  ngOnInit() {
  }
  //Set dynamic classes
  setClasses()
  {
    let classes={
      todo:true,
      'is-complete': this.atodo.completed

    }
    return classes;
  }

  onToggle()
  { //toggle UI
    this.atodo.completed= !this.atodo.completed;
     //toggle server
     this.todoService.ToggleCompleted(this.atodo).subscribe(atodo=> 
      console.log(atodo));
  }

  onDelete()
  {
    this.deleteTodo.emit(this.atodo);
  }


}
