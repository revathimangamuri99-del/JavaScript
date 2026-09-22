let student = {
    name : "renu",
    age : 21,
    course : "JavaScript"
};
for (let key in student) {
    console.log(key, ":", student[key]);
}