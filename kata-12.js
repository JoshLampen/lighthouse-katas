const organizeInstructors = function(instructors) {
  let finalList = {};
  for (const instructor of instructors) {
    let course = instructor.course;
    if (course in finalList) {
      finalList[course].push(instructor['name']);
    } else {
      finalList[course] = [instructor['name']];
    }
  }
  return finalList;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));