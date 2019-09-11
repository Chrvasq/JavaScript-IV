// base class Person
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

// Instructor Class - inherits from Person
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} received a perfect score on ${subject}.`);
  }
  gradeAssignment(student) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (randomNum <= 5) {
      return (student.grade -= Math.floor(Math.random() * 5) + 1);
    } else {
      return (student.grade += Math.floor(Math.random() * 11) + 1);
    }
  }
}

// Student Class - inherits from Person
class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
    this.graduated = attr.graduated;
    this.assignedInstructor = attr.assignedInstructor;
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRassignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
  graduate() {
    if (this.grade > 70) {
      this.graduated = true;
      console.log(`Congratulations ${this.name}! You've graduated!`);
    } else {
      console.log(
        `Sorry ${
          this.name
        }, you're not eligible to graduate yet. Let's grade your assignment again.`
      );
      this.assignedInstructor.gradeAssignment(this);
      return this.graduate();
    }
  }
}

// Team Lead Class - inherits from Instructor
class teamLead extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel stand-up time!​​`
    );
  }
  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const person1 = new Person({
  name: "Chris",
  age: 32,
  location: "California"
});

const person2 = new Person({
  name: "Michael",
  age: 29,
  location: "New York"
});

const instructor1 = new Instructor({
  name: "Richard",
  age: 26,
  location: "California",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "That's what she said!"
});

const instructor2 = new Instructor({
  name: "Andrew",
  age: 31,
  location: "California",
  specialty: "Redux",
  favLanguage: "JavaScript",
  catchPhrase: "That's cool!"
});

const student1 = new Student({
  name: "Pradeep",
  age: 25,
  location: "California",
  previousBackground: "Data Analyst",
  className: "FSWeb",
  favSubjects: ["Math", "Science", "English"],
  grade: 80,
  graduated: false,
  assignedInstructor: instructor1
});

const student2 = new Student({
  name: "Rachel",
  age: 31,
  location: "California",
  previousBackground: "Hospitality Industry",
  className: "UX Design",
  favSubjects: ["English", "History"],
  grade: 60,
  graduated: false,
  assignedInstructor: instructor2
});

const teamLead1 = new teamLead({
  name: "Marshall",
  age: 26,
  location: "California",
  specialty: "Javascript",
  favLanguage: "JavaScript",
  catchPhrase: "This is a catch phrase!",
  gradClassName: "CS09",
  favInstructor: "Pace"
});

const teamLead2 = new teamLead({
  name: "Javier",
  age: 26,
  location: "California",
  specialty: "Nodejs",
  favLanguage: "JavaScript",
  catchPhrase: "This is another catch phrase",
  gradClassName: "WEBPT09",
  favInstructor: "Pace"
});

console.log(person1);
person1.speak();
console.log(person2);
person2.speak();
console.log(instructor1);
instructor1.demo("React");
instructor1.grade(student1, "UX Design");
console.log(instructor2);
instructor2.demo("JavaScript");
instructor2.grade(student2, "FSWeb");
console.log(student1);
student1.listsSubjects();
student1.PRassignment("FSWeb");
student1.sprintChallenge("FSWeb");
console.log(student2);
student2.listsSubjects();
student2.PRassignment("UX Design");
student2.sprintChallenge("UX Design");
console.log(teamLead1);
teamLead1.standUp("webpt9");
teamLead1.debugCode(student2, "UX Design");
console.log(teamLead2);
teamLead2.standUp("webpt9");
teamLead2.debugCode(student1, "FSWeb");
student1.graduate(); // Congrats Pradeep! You've graduated!
student2.graduate(); // Will loop until student can graduate
