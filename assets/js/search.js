// BaseUrl:https://www.loc.gov/{endpoint}/?fo=json
// Example: https://www.loc.gov/film-and-videos/?q=dog&fo=json

var repoContainerEl = document.querySelector("#repos-container");
var getRepoName = function () {
  var baseurl = "https://www.loc.gov/";

  var queryString = document.location.search;
  if (queryString) {
    var apiUrl =
      baseurl +
      queryString.split("format=")[1] +
      "/" +
      queryString.split("&")[0] +
      "&fo=json";
  }

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayData(data);
      });
    }
  });
};
function displayData(data) {
  if (data.results.length === 0) {
    repoContainerEl.textContent = "No Data to Display!";
    return;
  }

  for (var i = 0; i < data.results.length; i++) {
    console.log(data.results[1].id);
    var dataEl = document.createElement("a");
    dataEl.classList = "list-item flex-row justify-space-between align-center";
    dataEl.setAttribute("href", data.results[i].id);
    dataEl.setAttribute("target", "_blank");

    var titleEl = document.createElement("span");
    titleEl.textContent = data.results[i].title;
    dataEl.appendChild(titleEl);

    // var typeEl = document.createElement("span");

    // if (issues[i].pull_request) {
    //   typeEl.textContent = "(Pull request)";
    // } else {
    //   typeEl.textContent = "(Issue)";
    // }

    // dataEl.appendChild(typeEl);

    repoContainerEl.appendChild(dataEl);
  }
}
getRepoName();
