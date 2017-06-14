import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../styles/main.css";
import initialText from "./initialText";

import PostMarkdown from "./components/postMarkdown";
import logo from "./img/markdown.svg";



class MarkdownPreviewer extends Component {
  constructor (props) {
    super(props);

    this.state = {term: initialText()};

  }

  render() {

    return (
      <div>
        <div className="title">
          <img src={logo}/>
          <h3>Markdown Previewer</h3>
        </div>
        <div className="textBox">
        <textarea
          value = {this.state.term}
          onChange = {event => this.setState({term: event.target.value})}
          ></textarea>
        <PostMarkdown
            className="processedText"
            preMarkdownText = {this.state.term}
          />
        </div>
      </div>
    );
  }

}


ReactDOM.render(<MarkdownPreviewer/>, document.querySelector(".container"));
