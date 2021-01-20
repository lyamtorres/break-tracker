class Student {
    constructor(name, cardNumber, exitTime, breakType) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.exitTime = exitTime;
        this.breakType = breakType;
    }
}

class UserInterface {
    static displayStudents() {
        const storedStudents = [];
        const students = storedStudents;

        students.forEach((student) => UserInterface.addStudentToList(student));
    }

    static addStudentToList(student) {
        const list = document.querySelector('#students-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.cardNumber}</td>
            <td>${student.exitTime}</td>
            <td>${student.breakType}</td>
            <td></td>          
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#card-number').value = '';
        document.querySelector('#exit-time').value = '';
        
    }

    static deleteStudent(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
}

// Muestra estudiante en la pantalla
document.addEventListener('DOMContentLoaded', UserInterface.displayStudents());

// Agrega estudiante a la lista
document.querySelector('#students-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const cardNumber = document.querySelector('#card-number').value;
    const exitTime = document.querySelector('#exit-time').value;
    const breakType = document.querySelector('#break-type').value;
    const student = new Student(name, cardNumber, exitTime, breakType);

    if (name === '' || cardNumber === '' || exitTime === '') {
        alert("Tous les champs ne sont pas remplis !");
    } else {
        UserInterface.addStudentToList(student);
        UserInterface.clearFields();
    }
});

// Elimina estudiante de la lista
document.querySelector('#students-list').addEventListener('click', (e) => {
    UserInterface.deleteStudent(e.target);
});