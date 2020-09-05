import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";


// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected //NOTE done
//NOTE Done
let url = 'Trundle_The_Great/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
    //TODO Handle this response from the server
    //NOTE Done
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    //NOTE DONE
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)]
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
    if (todo.completed) {
      todo.completed= false
    } else { 
      todo.completed = true
    }
    console.log(todo.completed)
    //TODO Make sure that you found a todo,
    //NOTE Done
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
    ProxyState.todos = ProxyState.todos
    // console.log(res);
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //NOTE DONE
    //		what is the request type - delete?
    //		once the response comes back, how do you update the state
await api.delete(url+todoId)
let index = ProxyState.todos.findIndex(t => t.id == todoId)
ProxyState.todos.splice(index,1)
ProxyState.todos = ProxyState.todos
  }
}

const todoService = new TodoService();
export default todoService;