class PiggyBank {
    #balance = 0

    put(value) {
        if (value <= 0) {
            console.log('Некорректная сумма')
            return
        }

        this.#balance += value
    }

    take(value) {
        if (value > this.#balance) {
            console.log('Недостаточно средств')
            return
        }

        this.#balance -= value
    }

    getBalance() {
        return this.#balance
    }
}

let bank = new PiggyBank

bank.put(100)
bank.put(50)
bank.take(30)

console.log(bank.getBalance())
bank.take(1000)
bank.put(-5)

//////////

class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(this.name + ' издаёт звук')
    }
}

class Cat extends Animal  {
    speak() {
        console.log(this.name + ' говори: Мяу')
    }
}

class Dog extends Animal  {
    speak() {
        console.log(this.name + ' говори: Гав')
    }

    fetch() {
        console.log(this.name + ' принёс палку')
    }
}

let animal = new Animal
let cat_one = new Cat('Кот 1')
let cat_two = new Cat('Кот 2')
let dog = new Dog('Шобака')
const array = [cat_one, cat_two, dog]

array.forEach(element => {
    element.speak()
});

dog.fetch()

//////////

class Task {
    constructor(title) {
        this.title = title
        this.done = false
    }

    complete() {
        this.done = true
    }

    toString() {
        if (this.done) {
            return '[x] ' + this.title
        } else {
            return '[ ] ' + this.title
        }
    }
}

class TodoList {
    constructor() {
        this.tasks = []
    }

    add(title) {
        let task = new Task(title)
        this.tasks.push(task)
    }

    complete(index) {
        this.tasks[index].complete()
    }

    print() {
        this.tasks.forEach(task => {
            console.log(task.toString())
        });
    }

    countDone() {
        let count = 0
        this.tasks.forEach(task => {
            if (task.done) {
                count++
            }
        })

        return count
    }
}

let todoList = new TodoList()

todoList.add('Купить хлеб')
todoList.add('Купить молоко')

todoList.complete(0)
todoList.print()

let counter = todoList.countDone()
console.log('Выполнено: ' + counter)
