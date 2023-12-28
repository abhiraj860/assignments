/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.lists = []
  }
  add(todo) {
    this.lists.push(todo)
  }
  remove(indexOfTodo) {
    if(indexOfTodo < this.lists.length) this.lists.splice(indexOfTodo, 1)
  }
  update(index, updatedTodo) {
    if(index < this.lists.length) this.lists[index] = updatedTodo
  }
  getAll() {
    return this.lists
  }
  get(indexOfTodo) {
    if(indexOfTodo < this.lists.length) {
      return this.lists[indexOfTodo]
    }
    return null
  }
  clear() {
    this.lists.splice(0, this.lists.length)
  }
}

module.exports = Todo;
