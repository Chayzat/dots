export class Table {
  constructor(id, data, color) {
    this.id = id;
    this.data = data;
    this.color = color;
  }
  createTable() {
    return $(`#grid-${this.id}`).kendoGrid({
      dataSource: this.data,
      width: "30%",
      foreground: "red",
      columns: [
        {
          field: "commentText",
          attributes:{ 'style':`background-color: ${this.color}`}
        },
      ],
    });
  }
}
