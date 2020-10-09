// student class: Represents a student
class student {
    constructor(surname, name, exitTime) {
        this.surname = surname;
        this.name = name;
        this.exitTime = exitTime;
    }
}

// userInterface Class: Handles UI tasks
class userInterface {
    static displayStudents() {
        const storedStudents = [
            {
                surname: 'Rivera',
                name: 'Carlos',
                exitTime: '18:30'
            },
            {
                surname: 'Montenegro',
                name: 'José',
                exitTime: '20:45'
            }
        ];

        const students = storedStudents;

        students.forEach((student) => userInterface.addStudentToList(student));
    }

    static addBookToList(student) {
        const list = document.querySelector('#students-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.surname}</td>
            <td>${student.name}</td>
            <td>${student.exitTime}</td>
            <td></td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

// store class: Handles storage

// event class: Display students, add a student, remove a student