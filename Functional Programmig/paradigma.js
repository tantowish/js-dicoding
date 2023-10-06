const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

const newNamesWithExcMark2 = names.map((name)=>`${name}!`)
console.log(newNamesWithExcMark2);

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);