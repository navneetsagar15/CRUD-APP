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

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getEditEmployee() {
  try {
    let resp = await fetch(`http://localhost:3000/employees/${id}`);
    let data = await resp.json();
    console.log(data);

    // PRE-filled INPUT fields
    firstNameEle.value = data.firstNameEle;
    middleNameEle.value = data.middleNameEle;
    lastNameEle.value = data.lastNameEle;
    maritalStatusEle.value = data.maritalStatusEle;
    dobEle.value = data.dobEle;
    emailEle.value = data.emailEle;
    mobileEle.value = data.mobileEle;
    streetEle.value = data.address.streetEle;
    cityEle.value = data.address.cityEle;
    stateEle.value = data.address.stateEle;
    countryEle.value = data.address.countryEle;
    zipEle.value = data.address.zipEle;
  } catch (error) {
    console.log(error);
    console.log("Something went Wrong ❌");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEditEmployee();
});

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Updated");

  // CREATE NEW EMPLOYEED
  const updatedEmployeeData = {
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

  try {
    let resp = await fetch(`http://localhost:3000/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployeeData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Employee is updated Succesfully");
        // form.reset();
        window.location.href = "allEMployees.html";
      });

    console.log(resp);
  } catch (err) {
    console.log(err);
  }
});
