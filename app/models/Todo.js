export default class Todo {
  constructor({ _id, completed, user, description}) {
    this.id = _id;
    this.completed = completed
    this.user = user
    this.description = description
  }

get TodoTemplate(){
return /*html */ `<div class="d-flex justify-content-between">
${this.checkedTemplate}<i class="fa fa-minus spcpointer" onclick="app.todoController.removeTodo('${this.id}')"></i>
</div>`

}

get checkedTemplate(){
  if (!this.completed) {
  return /*html*/ ` <li class="my-1"><input type="checkbox" class="py-2" onclick = "app.todoController.toggleTodoStatus('${this.id}')">${this.description}</li> `
  }else
  return /*html*/ `<li class="my-1"><input type="checkbox" checked class="py-2" onclick = "app.todoController.toggleTodoStatus('${this.id}')">${this.description}</li>`
}

}