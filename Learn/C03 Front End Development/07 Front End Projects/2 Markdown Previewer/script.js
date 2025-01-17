marked.use({breaks: true})

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: 
      `# Welcome to React Markdown Previewer!
## This is a sub-heading...
[And this is a link](https://www.freecodecamp.com)
\`<div></div>\` - inline code
\`\`\`
// this is multi-line code:
\`\`\`
- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
1. And there are numbered lists too.

> Block Quotes!
**Bold Text**
![React Logo w/ Text](https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-128.png)
      `
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div>
        <GetInput input={this.state.markdown} handleChange={this.handleChange} />
        <RenderInput input={this.state.markdown} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Editor</h3>
        <textarea id="editor" 
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Preview</h3>
        {/* <div id="preview" >{this.props.input}</div> */}
        <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(this.props.input)}}></div>
      </div>
    );
  }
};
ReactDOM.createRoot(document.getElementById('app')).render(<MarkdownPreviewer />)