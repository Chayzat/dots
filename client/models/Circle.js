export class Circle {
  constructor(dotId, x, y, radius, fill, layer, onDelete) {
    this.dotId = dotId;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill = fill;
    this.layer = layer;
    this.onDelete = onDelete;
  }
  createCircle() {
    return this.layer.add(
      new Konva.Circle({
        x: this.x,
        y: this.y,
        radius: this.radius,
        fill: this.fill,
      }).on("dblclick", () => {
        this.delete(this.dotId);
      })
    );
  }
  delete(dotId) {
    const result = confirm("Удалить элемент?");

    if (result) {
      this.onDelete(dotId);
    } else {
      alert("Операция прервана");
    }
  }
}
