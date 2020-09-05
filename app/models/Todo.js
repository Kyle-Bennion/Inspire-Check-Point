export default class Todo {
  constructor({ _id, completed, user, description}) {
    this.id = _id;
    this.completed = completed
    this.user = user
    this.description = description
  }

get TodoTemplate(){
return /*html */ `<div class="d-flex justify-content-between">
<li class="my-1 "><input type="checkbox" class="py-2">${this.description}</li><i class="fa fa-minus"></i>
</div>`

}

}