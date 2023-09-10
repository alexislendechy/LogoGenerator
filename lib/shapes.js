class Triangle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 10,190 290,190" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="36">${this.text}</text>
      </svg>
    `;
  }
}

class Circle {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="36">${this.text}</text>
      </svg>
    `;
  }
}

class Square {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="280" height="180" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="36">${this.text}</text>
      </svg>
    `;
  }
}

module.exports = { Triangle, Circle, Square };
