import React, { Component } from 'react';
import './TypingComponent.css';

let intervalValue;

class TypingComponent extends Component {
  state = {
    textArray: ['UI DEVELOPER', 'FRONT-END ENGINEER', 'JAVASCRIPT/REACT DEV'],
    arrayIndex: 0,
    characterIndex: 0,
    text: ''
  };

  type = () => {
    const { textArray, arrayIndex, characterIndex, text } = this.state;

    this.setState({
      characterIndex: characterIndex + 1,
      text: textArray[arrayIndex].substring(0, characterIndex + 1)
    });

    if (text === textArray[arrayIndex]) {
      clearInterval(intervalValue);
      if (arrayIndex !== textArray.length - 1) {
        setTimeout(() => {
          intervalValue = setInterval(this.delete, 50);
        }, 1000);
      }
    }
  };

  delete = () => {
    const { textArray, arrayIndex, characterIndex, text } = this.state;

    this.setState({
      characterIndex: characterIndex - 1,
      text: textArray[arrayIndex].substring(0, characterIndex - 1)
    });

    if (text === '') {
      clearInterval(intervalValue);

      if (arrayIndex === textArray.length - 1) this.setState({ arrayIndex: 0 });
      else this.setState({ arrayIndex: arrayIndex + 1, characterIndex: 0 });

      setTimeout(() => {
        intervalValue = setInterval(this.type, 100);
      }, 200);
    }
  };

  componentDidMount() {
    intervalValue = setInterval(this.type, 100);
  }

  componentWillUnmount() {
    clearInterval(intervalValue);
  }

  render() {
    const { text } = this.state;
    return (
      <div className="typing-container">
        <div className="typing-text">{text}</div>
        <div className="cursor" />
      </div>
    );
  }
}

export default TypingComponent;
