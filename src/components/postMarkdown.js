import React, {Component} from "react";
import emoji from "markdown-it-emoji";

import "../../node_modules/github-markdown-css/github-markdown.css";

const md = require('markdown-it')({
  typographer: true
})
  .use(require('markdown-it-math'), {
            inlineOpen: '\\(',
            inlineClose: '\\)',
            blockOpen: '\\[',
            blockClose: '\\]'
        })
  .use(emoji);


export default class PostMarkdown extends Component {
  constructor(props){
    super(props);
  }

  returnText(text) {
    return {__html: text};
  }

  render() {
   return (
     <div
        className="markdown-body"
        dangerouslySetInnerHTML={this.returnText(md.render(this.props.preMarkdownText))}>

     </div>);
 }
}
