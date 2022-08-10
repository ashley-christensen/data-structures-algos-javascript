class Student {
 constructor(firstName, lastName, year, tardies, scores) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.year = year;
  this.tardies = 2;
  this.scores = [];
 }
 fullName() {
  return `Your full name: ${this.firstName} ${this.lastName}`;
 }
 markLate() {
  this.tardies += 1;
  if (this.tardies > 5) {
   console.log(`${this.firstName} is expelled`);
  }
  return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
 }
 addScore(score) {
  this.scores.push(score);
  return this.scores;
 }
 calculateAverage() {
  let sum = this.scores.reduce((a, b) => { return a + b; });
  return sum / this.scores.length;
 }
}

const firstStudent = new Student('Ashley', 'Christensen', 1988);
const secondStudent = new Student('Ash', 'Hess', 1999);
console.log(firstStudent.fullName());
console.log(secondStudent.addScore(67));
console.log(secondStudent.scores);
console.log(secondStudent.addScore(88));
console.log(secondStudent.scores);
console.log(secondStudent.calculateAverage());
