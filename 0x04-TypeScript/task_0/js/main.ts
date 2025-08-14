interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}


const student1: Student = {
    firstName: "George",
    lastName: "Innocent",
    age: 45,
    location: "Bungoma"
}

const student2: Student = {
  firstName: "Jill",
  lastName: "Okumu",
  age: 3,
  location: "Ugenya"
};

const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");
table.border = "1";

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);