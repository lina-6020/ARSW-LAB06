//var mock = apimock;
var api = apiclient;

var handlerBlueprints = (function () {
  var author = null;
  var list = [];

  var _setName = function (newAuthor) {
    author = newAuthor;
    $("#campo2").text(`${author}'s blueprints`);
  };

  var actualizar = function (blueprintsByAuthor) {
    list = blueprintsByAuthor;
    if (list === undefined) {
      alert("Author does not exist");
    } else {
      var listBlueprints = list.map((obj) => {
        return {
          name: obj.name,
          points: obj.points.length,
        };
      });
      var total = listBlueprints.reduce((a, b) => a + b.points, 0);

      $("#totalPoints").text("Total Points: " + total);
      $("#blueprints tbody").empty();
      listBlueprints.map((blueprint) =>
        $("#blueprints tbody").append(
          `<tr><td>${blueprint.name}</td>
      <td>${blueprint.points}</td>
      <td><button type="button" class="boton_personalizado" onClick='handlerBlueprints.getPoints("${blueprint.name}")'>Open</button></td></tr>`
        )
      );
    }
  };

  var updateBlueprints = function (sendAuthor) {
    _setName(sendAuthor);
    api.getBlueprintsByAuthor(sendAuthor, actualizar);
    //apimock.getBlueprintsByAuthor(author, actualizar);

  };

  var putPoints = function (listPoints) {
    $("#canvasTitle").text("Current blueprint: " + listPoints.name);
    var myCanvas = document.getElementById("myCanvas");
    var contx = myCanvas.getContext("2d");
    contx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    contx.beginPath();
    var first = listPoints.points[0];
    contx.moveTo(first.x, first.y);
    listPoints.points.map((point) => contx.lineTo(point.x, point.y));
    contx.stroke();
  };

  var getPoints = function (nameBlueprints) {
    api.getBlueprintsByNameAndAuthor(author, nameBlueprints, putPoints);
    //apimock.getBlueprintsByNameAndAuthor(author, nameBlueprints, putPoints);
  };

  return {
    updateBlueprints: updateBlueprints,
    getPoints: getPoints,
  };
})();
