"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyApp = function (_React$Component) {
  _inherits(MyApp, _React$Component);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MyApp.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12" },
          React.createElement(
            "h1",
            { className: "text-center" },
            "GitHub-flavored Markdown Previewer"
          ),
          React.createElement("hr", null)
        )
      ),
      React.createElement(Input, null)
    );
  };

  return MyApp;
}(React.Component);

var Input = function (_React$Component2) {
  _inherits(Input, _React$Component2);

  function Input() {
    _classCallCheck(this, Input);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));
    //Defines the constructor of a subclass

    _this2.state = {
      md: '# Example of a Large Markdown Heading\n\nType here to replace and see output below\n------\n\n### Example of Medium/Large Heading\n\nParagraphs can be separated by a blank linke.\n\nLeave 2 spaces at the end of a line to create a line break\n\nText attributes include: *italic*, **bold**,\n`monospace`, ~~strikethrough~~. \n\nUnordered list:\n\n * apples\n * oranges\n * pears\n\nNumbered list:\n\n 1. apples\n 2. oranges\n 3. pears\n\n---\n\n#### Developed by:\n[Caroline Gordon](https://carrmichele.github.io \"Caroline Gordon\'s Portfolio\")'
    };
    return _this2;
  }

  Input.prototype.updatePreview = function updatePreview(e) {
    this.setState({
      md: e.target.value
    });
  };

  Input.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
          "h3",
          { className: "text-center input" },
          "Example Markdown Input"
        ),
        React.createElement("textarea", { type: "text", className: "md-input", value: this.state.md, onChange: this.updatePreview.bind(this) })
      ),
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
          "h3",
          { className: "text-center result" },
          "Markup Output Example"
        ),
        React.createElement("hr", null),
        React.createElement(MarkdownExample, { markdown: this.state.md })
      )
    );
  };

  return Input;
}(React.Component);

var MarkdownExample = function (_React$Component3) {
  _inherits(MarkdownExample, _React$Component3);

  function MarkdownExample() {
    _classCallCheck(this, MarkdownExample);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  MarkdownExample.prototype.convertMarkup = function convertMarkup() {
    return { __html: marked(this.props.markdown) };
  };

  MarkdownExample.prototype.render = function render() {
    return React.createElement("div", { className: "well", dangerouslySetInnerHTML: this.convertMarkup() });
  };

  return MarkdownExample;
}(React.Component);

React.render(React.createElement(MyApp, null), document.getElementById('markdownApp'));