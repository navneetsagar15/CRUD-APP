const employeesContainerEle = document.getElementById("employees-container");

async function getAllEmployees() {
  try {
    // let resp = await fetch(`${import.meta.env.BASE_URL}/employees`);
    let resp = await fetch("https://crud-app-eyxv.onrender.com/employees");

    let data = await resp.json();
    console.log(data);
    displayEmployees(data);
  } catch (err) {
    console.log(err);
    alert("Something went Wrong ❌");
  }
}

//! CALL FUNCTION AFTER DOM TREE CREATION
window.addEventListener("DOMContentLoaded", () => {
  getAllEmployees();
});

function displayEmployees(allEmployees) {
  employeesContainerEle.innerHTML = "";

  allEmployees.forEach((emp) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.firstNameEle} ${emp.middleNameEle} ${emp.lastNameEle}</td>
      <td>${emp.maritalStatusEle}</td>
      <td>${emp.dobEle}</td>
      <td>${emp.emailEle}</td>
      <td>${emp.mobileEle}</td>
      <td>
        ${emp.address.streetEle}, ${emp.address.cityEle},
        ${emp.address.stateEle}, ${emp.address.countryEle} - ${emp.address.zipEle}
      </td>
      <td class="action-cell">
        <button class="btn edit-btn" data-id="${emp.id}">Edit</button>
        <button class="btn delete-btn" data-id="${emp.id}">Delete</button>
      </td>
    `;
    //! APPLY CLICK EVENT IN DELETE BUTTON
    row.querySelector(".delete-btn").addEventListener("click", () => {
      handleDelete(emp.id);
    });

    //! APPLY CLICK EVENT IN EDIT BUTTON
    row.querySelector(".edit-btn").addEventListener("click", () => {
      handleEdit(emp.id);
    });

    employeesContainerEle.appendChild(row);
  });
}

// function displayEmployees(allEmployees){
//     allEmployees.map((emp) => {
//         const empCard = document.createElement("article");
//         empCard.innerHTML = `
//         <header class = "emp-header">
//             <h3>${emp.firstNameEle} ${emp.middleNameEle} ${emp.lastNameEle}
//             </h3>
//             <span class="emp-id">ID: ${emp.id}</span>
//         </header>

//         <section class = "emp-info">
//             <p><strong>Marital Status:</strong> ${emp.maritalStatusEle}</p>
//             <p><strong>Date of Birth:</strong> ${emp.dob}</p>
//         </section>

//         <section class = "emp-contact>
//             <p><strong>Email:</strong> ${emp.emailEle}</p>
//             <p><strong>Mobile:</strong> ${emp.mobileEle}</p>
//         </section>

//         <section class = "emp-address">
//             <p>
//                 ${emp.address.streetEle}, ${emp.address.cityEle}, <br>
//                 ${emp.address.stateEle}, ${emp.address.countryEle} - ${emp.address.zipEle}
//             </p>
//         </section>

//         <footer class = "emp-action">
//             <button class= "btn edit-btn" data-id = "${emp.id}">Edit</button>
//             <button class= "btn delete-btn" data-id = "${emp.id}">Delete</button>
//         </footer>
//         `;

//         //! APPLY CLICK EVENT IN DELETE BUTTON
//         const deleteBtn = empCard.querySelector(".delete-btn");
//         deleteBtn.addEventListener("click", () =>{
//             handleDelete(emp.id);
//         });

//         //! APPLY CLICK EVENT IN EDIT BUTTON

//         const editBtn = empCard.querySelector(".edit-btn");
//         editBtn.addEventListener("click", () =>{
//             handleEdit(emp.id);
//         });

//         employeesContainerEle.append(empCard);
//     });
// }

async function handleDelete(id) {
  console.log(id);
  try {
    let resp = await fetch(
      `https://crud-app-eyxv.onrender.com/employees/${id}`,
      {
        method: "DELETE",
      },
    );
    console.log(resp);
    window.location.href = "allEmployees.html";
  } catch (error) {
    console.log(error);
    alert("Unable to delete ❌");
  }
}

function handleEdit(id) {
  window.location.href = `editEmployee.html?id=${id}`;
}
