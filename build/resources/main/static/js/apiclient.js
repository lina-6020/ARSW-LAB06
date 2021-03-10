var url = "http://localhost:8080/blueprints/";

var apiclient = (function () {
  var getBlueprintsByAuthor = function (author, callback) {
    var urlSend = url + author;
    $.get(urlSend, function (data, state) {
      if (state == "success") {
        callback(data);
      } else {
        alert("Error");
      }
    });
  };

  var getBlueprintsByNameAndAuthor = function (
    author,
    nameBlueprint,
    callback
  ) {
    var urlSend = url + author + "/" + nameBlueprint;
    $.get(urlSend, function (data, state) {
      if (state == "success") {
        callback(data);
      } else {
        alert("Error");
      }
    });
  };
  return {
    getBlueprintsByAuthor: getBlueprintsByAuthor,
    getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor,
  };
})();
