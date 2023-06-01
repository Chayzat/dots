export class Table {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }
  createTable() {
    return $(`#grid-${this.id}`).kendoGrid({
      dataSource: this.data,
      width: "20%",
      columns: [
        {
          field: "commentText",
          title: " ",
        },
      ],
    });
  }
}
