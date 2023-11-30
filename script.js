import { marked } from "https://cdn.skypack.dev/marked@4.1.0";

marked.setOptions({
  breaks: true });


let placeholder = `# Welcome to my responsive Markdown App.
        
## This app converts html and CSS language typed here (the Editor) and converts it into it's appropriate form in the Previewer.
        
For example, this is your basic Divider element between backticks <div>This is the divider</div>
oops forgot these, \`<div></div>\`, notice they're gone below but you can see the div element now.

How about an inline style?
<p style="color: blue">
This whole paragraph element is blue now.
</p>

How about a link to the [internets favorite thing?](https://www.funnycatpix.com/)

Well who needs a link when we can embed images? ![Another cat!](http://placekitten.com/100/100)

Theres so many things we can we should just make a list!
- We can make **BOLD** text.
- or *italics*
1. Don't like bullet lists? Try numbers.
1. You don't even have to keep track, just use 1's.
1. List's are fun, but we need a little more room for the next parts.

How about some real code?

\`\`\`
// This is multi-line code:

function count(){
  let i = 0;
  while (i <= 5){
    console.log(i);
    i++;
  }
 }
\`\`\`

> Block Quotes! Code above counts to 5 if you didn't know.







        
        `;
const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    placeholder = e.target.value;
    this.setState({
      markdown: placeholder });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Markdown App"), /*#__PURE__*/
      React.createElement("div", { id: "appWrap" }, /*#__PURE__*/
      React.createElement("div", { id: "editorWrap" }, /*#__PURE__*/
      React.createElement("h2", { className: "header" }, "Editor"), /*#__PURE__*/
      React.createElement(Editor, {
        markdown: this.state.markdown,
        onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { id: "previewerWrap" }, /*#__PURE__*/
      React.createElement("h2", { className: "header" }, "Previewer"), /*#__PURE__*/
      React.createElement(Previewer, { markdown: this.state.markdown })))));




  }}


const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", {
      id: "editor",
      value: props.markdown,
      onChange: props.onChange,
      type: "text" }));


};

const Previewer = props => {
  return /*#__PURE__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: marked(props.markdown, { renderer: renderer }) },

      id: "preview" }));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));