export class Image {
  constructor(x, y, url, layer, radius) {
    this.x = x;
    this.y = y;
    this.url = url;
    this.layer = layer;
    this.radius = radius;
  }
  createImage() {
    return Konva.Image.fromURL(this.url, (darthNode) => {
      darthNode.setAttrs({
        x: this.x-60-this.radius,
        y: this.y+5+this.radius,
        scaleX: 0.5,
        scaleY: 0.5,
      });
      this.layer.add(darthNode);
    });
  }
}
