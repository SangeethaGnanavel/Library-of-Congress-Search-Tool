var userFormEl = document.querySelector("#frmsearch");
var formSearch = document.querySelector("#txtsearch");
var formatOption = document.querySelector("#format");

var pageRedirect = function (event) {
  event.preventDefault();
  let txtSearch = formSearch.value.trim();
  let format = formatOption.options[formatOption.selectedIndex].value;
  let navigateurl = "./search-results.html?";

  if (txtSearch) {
    if (!format == "") {
      location.assign(navigateurl + "q=" + txtSearch + "&format=" + format);
    } else {
      location.assign(navigateurl + "q=" + txtSearch + "&format=");
    }
  } else alert("Please enter search text");
};

userFormEl.addEventListener("submit", pageRedirect);
