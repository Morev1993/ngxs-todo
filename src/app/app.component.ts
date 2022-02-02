import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoItem, TodosState } from './state/todos.state';

import {Todo} from './state/todos.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxs-todo';

  todos$: Observable<TodoItem[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(state => state.todos.data);

  }

  add() {
    this.store.dispatch(new Todo.Add({
      id: Math.random(),
      title: `todo${Math.random()}`,
      isCompleted: false,
    }));
  }

  updateTodo() {
    // this.store.dispatch(new Todo.Edit({
    //   id,
    //   isCompleted: !value
    // }));
  }

  delete(id: number) {
    this.store.dispatch(new Todo.Delete(id));
  }
}
