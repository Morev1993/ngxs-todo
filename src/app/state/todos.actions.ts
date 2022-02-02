import { TodoItem } from "./todos.state";

export namespace Todo {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public payload: TodoItem) {}
  }

  export class Edit {
    static readonly type = '[Todo] Edit';
    constructor(public payload: TodoItem) {}
  }

  export class FetchAll {
    static readonly type = '[Todo] Fetch All';
  }

  export class Delete {
    static readonly type = '[Todo] Delete';
    constructor(public id: number) {}
  }
}