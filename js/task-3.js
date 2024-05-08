class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
    }
    padEnd(str) {

    }
    const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
