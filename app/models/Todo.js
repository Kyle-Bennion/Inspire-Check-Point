export default class Todo {
  constructor({ _id, completed, user, description}) {
    this.id = _id;
    this.completed = completed
    this.user = user
    this.description = description
  }

get TodoTemplate(){
return ` <li>`

}

}