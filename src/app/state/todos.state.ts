import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

import {Todo} from './todos.actions';


export interface TodoItem {
  id: number,
  title?: string;
  isCompleted: boolean;
}

export interface TodosStateModel {
  data: TodoItem[];
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    data: []
  }
})
@Injectable()
export class TodosState {
  @Action(Todo.Add)
  add(ctx: StateContext<TodosStateModel>, action: Todo.Add) {
    const state = ctx.getState();
    
    ctx.setState({
      ...state,
      data: state.data.concat(action.payload)
    });
  }

  edit(ctx: StateContext<TodosStateModel>, action: Todo.Edit) {
    const state = ctx.getState();
    
    ctx.setState({
      ...state,
      data: state.data.map(item => {
        if (item.id === action.payload.id) {
          item.isCompleted = action.payload.isCompleted;
        }
        return item;
      })
    });
  }

  @Action(Todo.Delete)
  delete(ctx: StateContext<TodosStateModel>, action: Todo.Delete) {
    const state = ctx.getState();
    
    ctx.setState({
      ...state,
      data: state.data.filter(item => item.id !== action.id)
    });
  }
}
