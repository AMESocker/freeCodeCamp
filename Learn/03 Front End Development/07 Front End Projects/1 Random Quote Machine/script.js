const QUOTES = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },

  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
];
class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let randomIndex = Math.floor(Math.random() * QUOTES.length);
    let randomQuote = QUOTES[randomIndex];
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
    });
  }
  componentDidMount() {
    this.handleClick();
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">- {this.state.author}</div>
        <button id="new-quote" onClick={this.handleClick}>New Quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<Quote />)





