// lib/shapes.js
class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,10 10,190 290,190" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="280" height="180" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  