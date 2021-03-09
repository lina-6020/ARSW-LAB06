var apimock = (function () {
  var mockdata = [];

  mockdata["JhonConnor"] = [
    {
      author: "JhonConnor",
      name: "house",
      points: [
        {
          x: 100,
          y: 100,
        },
        {
          x: 100,
          y: 300,
        },
        {
          x: 200,
          y: 400,
        },
        {
          x: 300,
          y: 300,
        },
        {
          x: 300,
          y: 100,
        },
        {
          x: 100,
          y: 100,
        },
        {
          x: 100,
          y: 300,
        },
        {
          x: 300,
          y: 300,
        },
      ],
    },
    {
      author: "JhonConnor",
      name: "dog",
      points: [
        {
          x: 100,
          y: 200,
        },
        {
          x: 150,
          y: 5,
        },
        {
          x: 75,
          y: 85,
        },
        {
          x: 46,
          y: 37,
        },
        {
          x: 83,
          y: 46,
        },
        {
          x: 57,
          y: 74,
        },
        {
          x: 64,
          y: 19,
        },
        {
          x: 49,
          y: 40,
        },
      ],
    },
    {
      author: "JhonConnor",
      name: "bike",
      points: [
        {
          x: 30,
          y: 35,
        },
        {
          x: 40,
          y: 45,
        },
      ],
    },
  ];

  mockdata["LexLuthor"] = [
    {
      author: "LexLuthor",
      name: "kryptonite",
      points: [
        {
          x: 60,
          y: 65,
        },
        {
          x: 70,
          y: 75,
        },
      ],
    },
    {
      author: "LexLuthor",
      name: "pool",
      points: [
        {
          x: 60,
          y: 65,
        },
        {
          x: 7,
          y: 5,
        },
        {
          x: 19,
          y: 46,
        },
        {
          x: 190,
          y: 460,
        },
        {
          x: 64,
          y: 102,
        },
      ],
    },
  ];

  var getBlueprintsByAuthor = function (author, callback) {
    callback(mockdata[author]);
  };

  var getBlueprintsByNameAndAuthor = function (
    author,
    nameBlueprint,
    callback
  ) {
    callback(mockdata[author].find((obj) => obj.name === nameBlueprint));
  };

  return {
    getBlueprintsByAuthor: getBlueprintsByAuthor,
    getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor,
  };
})();
