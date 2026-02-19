const employeeFormEle = document.getElementById("employee-form");
const firstNameEle = document.getElementById("firstName");
const middleNameEle = document.getElementById("middleName");
const lastNameEle = document.getElementById("lastName");
const maritalStatusEle = document.getElementById("maritalStatus");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const mobileEle = document.getElementById("mobile");
const address = document.getElementById("address");
const streetEle = document.getElementById("street");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipEle = document.getElementById("zip");

console.log(employeeFormEle);

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  let newEmployeeData = {
    firstNameEle: firstNameEle.value.trim(),
    middleNameEle: middleNameEle.value.trim(),
    lastNameEle: lastNameEle.value.trim(),
    maritalStatusEle: maritalStatusEle.value.trim(),
    dobEle: dobEle.value.trim(),
    emailEle: emailEle.value.trim(),
    mobileEle: mobileEle.value.trim(),
    address: {
      streetEle: streetEle.value.trim(),
      cityEle: cityEle.value.trim(),
      stateEle: stateEle.value.trim(),
      countryEle: countryEle.value.trim(),
      zipEle: zipEle.value.trim(),
    },
  };

  await fetch("https://crud-app-eyxv.onrender.com/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployeeData), // SEND EMPLOYEE DATA IN JSON-FORMAT
  })
    .then((res) => res.json())
    .then(() => {
      alert("Employee is created Succesfully");
      employeeFormEle.reset();
      window.location.href = "allEmployees.html";
    })
    .catch((err) => console.log(err));
  console.log(newEmployeeData);
});
