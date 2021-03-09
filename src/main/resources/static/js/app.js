var mock = apimock;

var handlerBlueprints = (function () {
  var author = null;
  var list = [];

  var setName = function (newAuthor) {
    author = newAuthor;
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

      $("#totalPoints").text("Total points: " + total);
      listBlueprints.map((blueprint) =>
        $("#blueprints tbody").append(`<tr><td>${blueprint.name}</td>
                                    <td>${blueprint.points}</td>
                                    <td><button type="button" onClick="handlerBlueprints.getPoints('
                                    ${blueprint.name}'
                                    ) ">Open</button></td><tr/>`)
      );
    }
  };

  var updateBlueprints = function (sendAuthor) {
    author = sendAuthor;
    apimock.getBlueprintsByAuthor(author, actualizar);
  };

  var putPoints = function (listPoints) {
    console.log("sdfsfsdf");
    $("#canvasTitle").text("Current blueprint: " + listPoints.name);
    var myCanvas = document.getElementById("myCanvas");
    var contx = myCanvas.getContext("2d");
    contx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    contx.beginPath();
    var first = listPoints.points[0];
    ctx.moveTo(first.x, first.y);
    listPoints.points.map((point) => contx.lineTo(point.x, point.y));
    ctx.stroke();
  };

  var getPoints = function (nameBlueprints) {
    apimock.getBlueprintsByNameAndAuthor(author, nameBlueprints, putPoints);
  };

  return {
    setName: setName,
    updateBlueprints: updateBlueprints,
    getPoints: getPoints,
  };
})();
