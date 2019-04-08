export default class Spinner {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "refreshing-loader";
    this.el.innerHTML = this.render();
  }

  render() {
    return `
      Loading...
    `;
  }
}