let user = {
    name: 'Jhon',
    age: 30,
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

user.sayHello();