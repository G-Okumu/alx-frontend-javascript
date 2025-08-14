interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any other properties like `contract`
}

interface Director extends Teacher {
  numberOfReports: number;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }) {
  return `${firstName}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  public firstName: string;
  public lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
