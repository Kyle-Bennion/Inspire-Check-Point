import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
//NOTE DONE
function _drawTodos() { 
let template = ""
let todos = ProxyState.todos
todos.forEach(t => template += t.TodoTemplate)
document.getElementById('list-todo').innerHTML = template
}
function _drawTaskLeft(){
  let count = 0
  for( let i = 0 ; i < ProxyState.todos.length; i++)
if (!ProxyState.todos[i].completed) {
  count++
}
document.getElementById('countleft').innerHTML = `ToDo's Remaining : ${count}`
}



export default class TodoController {
  constructor() {
    ProxyState.on("todos",_drawTodos)
    //TODO Remember to register your subscribers
    //NOTE DONE
    this.getTodos();
    ProxyState.on("todos",_drawTaskLeft)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(event) {
    event.preventDefault();
    var form = event.target;

    //TODO build the todo object from the data that comes into this method
    //NOTE DONE
    var todo = {description: form.todo.value};
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}
