interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any other properties like `contract`
}


interface Director extends Teacher {
  numberOfReports: number
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }) {
  return `${firstName}. ${lastName}`;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}