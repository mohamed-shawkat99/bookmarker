var nameInput =document.getElementById('SiteName')
var urlInput =document.getElementById('SiteURL')
var submitBtn =document.getElementById('submitBtn')
var tbody =document.getElementById('tbody')
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.querySelector(".box-info");
var books;


if (localStorage.getItem("books")==null) {
  books=[]
}else{
  books=JSON.parse(localStorage.getItem("books")) 
}
display()



submitBtn.onclick = function(){
  if(    nameInput.classList.contains("is-valid") &&
  urlInput.classList.contains("is-valid")){
    var book ={
      nameInput:SiteName.value,
      urlInput:SiteURL.value
    }
      books.push(book)
      console.log(books)
      localStorage.setItem("books",JSON.stringify(books))
      display()
      clear()
  }else{
    boxModal.classList.remove("d-none");
  }

}


function display(i) {
  var table =``
  for (let i = 0; i < books.length; i++) {
    table += `
    <tr>
    <td>${i+1}</td>
    <td>${books[i].nameInput}</td>
    <td><a href="https:${books[i].urlInput}"><button class="btn btn-info">visit</button></a></td>
    <td><button onclick="deletebook(${i})" class="btn btn-danger">delete</button></td>
  </tr>
    `
  }

  tbody.innerHTML=table
}

function clear() {
  nameInput.value=``
  urlInput.value=``
}

function deletebook(i) {
      books.splice(i,1)
      localStorage.setItem("books",JSON.stringify(books))
      display()
}

var nameRegex=  /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

nameInput.addEventListener("input", function () {
  validate(nameInput, nameRegex);
});
urlInput.addEventListener("input", function () {
  validate(urlInput, urlRegex);
});
function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

function closeModal() {
  boxModal.classList.add("d-none");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("box-info")) {
    closeModal();
  }
});