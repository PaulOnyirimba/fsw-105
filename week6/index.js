var employees = ["Jon", "April", "Jacob",]

function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

var Jon = new Employee("Jon", "Teacher", "35000", "Fulltime")
console.log(Jon)

var April = new Employee("April", "Doctor", "250000", "Fulltime")
console.log(April)

var Jacob = new Employee("Jacob", "Dentist", "180000", "PartTime")
console.log(Jacob)

Employee.prototype.status = function(){
console.log(this.status)
}
