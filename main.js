//Employee chain
var Employee = function() {
  this.firstName = null;
  this.lastName = null;
  this.department = null;
}

var Clinician = function() {
  this.expertise = null;
  this.role = "Clinician";
}

var Operations = function() {
  this.responsibility = null;
  this.role = "Operations";
}

Clinician.prototype = new Employee();
Operations.prototype = new Employee();

//Department chain
var Department = function() {
  this.name = null;
}

Department.prototype.setCity = function(newCity) {
  this.city = newCity;
}

var FieldOffice = function() {
  this.departmentType = "Field Office";
}

var Headquarters = function() {
  this.departmentType = "Headquarters";
}

FieldOffice.prototype = new Department();
Headquarters.prototype = new Department();


//Clinician employees
var Bill = new Clinician();
Bill.expertise = "Physical Therapist";
Bill.firstName = "Bill";
Bill.lastName = "Clinton";
var BillDepartment = new Headquarters();
BillDepartment.name = "FBI";
BillDepartment.setCity("Washington D.C.");
Bill.department = BillDepartment;

var Steve = new Clinician();
Steve.expertise = "Sociologist";
Steve.firstName = "Steve";
Steve.lastName = "Salisbury";
var SteveDepartment = new FieldOffice();
SteveDepartment.name = "FBI";
SteveDepartment.setCity("Bushwick");
Steve.department = SteveDepartment;

//Operations employees
var Joe = new Operations();
Joe.responsibility = "IT Manager";
Joe.firstName = "Joe";
Joe.lastName = "Gage";
var JoeDepartment = new Headquarters();
JoeDepartment.name = "NSA";
JoeDepartment.setCity("Cambridge");
Joe.department = JoeDepartment;

var Dolores = new Operations();
Dolores.responsibility = "Revenue Collection Manager";
Dolores.firstName = "Dolores";
Dolores.lastName = "Gage";
var DoloresDepartment = new FieldOffice();
DoloresDepartment.name = "NSA";
DoloresDepartment.setCity("Cambridge");
Dolores.department = DoloresDepartment;

console.log(Bill);

console.log(`${Bill.firstName} ${Bill.lastName} works as a ${Bill.role}, in the ${Bill.department.city} ${Bill.department.departmentType}, and is a ${Bill.expertise}.`);
console.log(`${Steve.firstName} ${Steve.lastName} works as a ${Steve.role}, in the ${Steve.department.city} ${Steve.department.departmentType}, and is a ${Steve.expertise}.`);
console.log(`${Joe.firstName} ${Joe.lastName} works in ${Joe.role}, in the ${Joe.department.city} ${Joe.department.departmentType}, and is a ${Joe.responsibility}.`);
console.log(`${Dolores.firstName} ${Dolores.lastName} works in ${Dolores.role}, in the ${Dolores.department.city} ${Dolores.department.departmentType}, and is a ${Dolores.responsibility}.`);