export class Stage {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
  }
  createStage() {
    return new Konva.Stage({
      container: this.element,
      height: this.height,
      width: this.width,
    });
  }
}
