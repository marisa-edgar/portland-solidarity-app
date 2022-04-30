class Title {
  public component(): HTMLElement {
    const element = document.createElement("H1");
    element.innerHTML = "Portland Solidarity In Action";
    return element;
  }
}
document.body.appendChild(new Title().component());
