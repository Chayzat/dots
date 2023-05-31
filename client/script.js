import { Circle } from "./models/Circle.js";
import { Image } from "./models/Image.js";
import { Stage } from "./models/Stage.js";
import { Table } from "./models/Table.js";

const url = "http://localhost:5113/api/App";
const urlDelete = "http://localhost:5113/api/App/dot";

const layer = new Konva.Layer();
const stage = new Stage(
  "bucket",
  window.innerWidth,
  window.innerHeight
).createStage();

//
$.ajax(url)
  .done((data) => {
    data.map(({ pointX, pointY, dotColor, radius, comments, dotId }) => {
      const circle = new Circle(
        dotId,
        pointX,
        pointY,
        radius,
        dotColor,
        layer,
        onDelete
      );
      circle.createCircle();
      dotTable(
        comments,
        comments.map((dot) => dot.dotId),
        comments.map((dot) => dot.commentColor)
      );
      domToImage(document.getElementById(`grid-${dotId}`), pointX, pointY, radius);
    });
  })
  .fail((_, status) => console.log("error:", status));

function onDelete(id) {
  $.ajax({
    url: `${urlDelete}/${id}`,
    type: "DELETE",
    success: function () {
      alert("Элемент удален!");
    },
  });
}

function domToImage(node, pointX, pointY, radius) {
  domtoimage
    .toSvg(node)
    .then((url) => new Image(pointX, pointY, url, layer, radius).createImage())
    .catch((error) => {
      console.error("don't have a comment!", error);
    });
}

function dotTable(data, dots, color) {
  const set = Array.from(new Set(dots));
  set.map((id) => {
    const grids = document.querySelector("#grids");
    const grid = document.createElement("div");
    grid.id = "grid-" + id;
    grids.append(grid);
    const table = new Table(id, data, color);
    table.createTable();
  });
}

stage.add(layer);
