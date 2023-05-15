function element(element) {
    return document.querySelector(`${element}`)
}
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
}

function prim() {
    let person = new Person(element('#input_name').value, element('#input_surname').value)
    if (person.getName() === '' && person.getSurname() === '') {
        element('.result').style.display = 'block';
        element('.result').classList.add('test');
        element('#name').innerText = 'Имя: пусто'
        element('#surname').innerText = 'Фамилия: пусто'
    }
    else if (person.getName() === '') {
        element('.result').classList.add('test');
        element('.result').style.display = 'block';
        element('#name').innerText = 'Имя: пусто'
        element('#surname').innerText = `Фамилия: ${person.getSurname()}`
    }
    else if (person.getSurname() === '') {
        element('.result').classList.add('test');
        element('.result').style.display = 'block';
        element('#surname').innerText = 'Фамилия: пусто'
        element('#name').innerText = `Имя: ${person.getName()}`
    }
    else {
        element('.result').classList.add('test');
        element('.result').style.display = 'block';
        element('#name').innerText = `Имя: ${person.getName()}`
        element('#surname').innerText = `Фамилия: ${person.getSurname()}`
    }
}