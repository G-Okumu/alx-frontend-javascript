interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to Director Tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: string | number) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
