const form=document.getElementById("userform")
const name=document.getElementById("exampleInputName")
const email=document.getElementById("exampleInputEmail1")
const age=document.getElementById("exampleInputAge")
const password=document.getElementById("exampleInputPassword1")
const tableBody=document.querySelector("#userTable tbody")
// form.addEventListener("submit", submitForm);
const googleLink=document.getElementById("googleBtn")


googleLink.addEventListener("click" , (e)=>{
  e.preventDefault()
  window.alert("This takes you to google")
});

function submitForm(event){
  event.preventDefault()
  console.log("form submitted")
const name=document.getElementById('name').value;
const exampleInputEmail1=document.getElementById().value;
const age=document.getElementById().value;
//create a new row
const newRow = document.createElement("tr")
newRow.innerHTML = `<td>${name}</td> <td>${name}</td> <td>${name}</td>`
//attach to table
tableBody.appendChild(newRow);



  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email.";
        isValid = false;
      }

      // Password validation
      if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
      }

      // Age validation
      const ageNum = parseInt(age);
      if (age === "") {
        document.getElementById("ageError").innerText = "Age is required.";
        isValid = false;
      } else if (isNaN(ageNum) || ageNum <= 0) {
        document.getElementById("ageError").innerText = "Please enter a valid age.";
        isValid = false;
      }

      if (isValid) {
        // Add data to table
        const table = document.querySelector("#userTable tbody");
        const newRow = table.insertRow();
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>${age}</td>
        `;
          document.getElementById("userForm").reset();
      // form.reset();  // clears the form to that 
        // Reset form
      
      }
    };








 document.getElementById("userForm").addEventListener("submit", submitForm);

      // // Clear previous errors
      // document.getElementById("nameError").innerText = "";
      // document.getElementById("emailError").innerText = "";
      // document.getElementById("passwordError").innerText = "";
      // document.getElementById("ageError").innerText = "";

      // // Get input values
      // const name = document.getElementById("name").value.trim();
      // const email = document.getElementById("email").value.trim();
      // const password = document.getElementById("password").value.trim();
      // const age = document.getElementById("age").value.trim();

      // let isValid = true;

      // // Name validation
      // if (name === "") {
      //   document.getElementById("nameError").innerText = "Name is required.";
      //   isValid = false;
      // }

      // Email validation
   




    
    // // PDF Download
    // document.getElementById('downloadPdf').addEventListener('click', () => {
    //   const { jsPDF } = window.jspdf;
    //   const doc = new jsPDF();

    //   doc.text("Furniture Company - Suppliers Report", 14, 15);
    //   doc.setFontSize(10);
    //   doc.text("Generated on August 14, 2025", 14, 22);

    //   doc.autoTable({
    //     html: '#suppliersTable',
    //     startY: 30,
    //     styles: { fontSize: 8 },
    //     headStyles: { fillColor: [0, 119, 204] },
    //   });

    //   doc.save('Furniture_Suppliers_Report.pdf');
    // });

    // // Excel Download
    // document.getElementById('downloadExcel').addEventListener('click', () => {
    //   const table = document.getElementById('suppliersTable');
    //   const wb = XLSX.utils.book_new();
    //   const ws = XLSX.utils.table_to_sheet(table);
    //   XLSX.utils.book_append_sheet(wb, ws, 'Suppliers');
    //   XLSX.writeFile(wb, 'Furniture_Suppliers_Report.xlsx');
    // });
