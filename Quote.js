//App Component
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: "gray"
    };
    
    
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }
  
  handleChangeColor(color){
    this.setState({
      color: color
    });
  }
  
  render() { 
    return (
      <div id="app" className={this.state.color}>
        <QuoteBox onChangeAppColor={this.handleChangeColor}/>
      </div>
    );
  }
}

//Quote Box Component
class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quoteText: "",
      quoteAuthor: "",
      curColor: "gray"
    }
    
    this.getNewQuote();
    
    //Bind handles
    this.handleNewQuote = this.handleNewQuote.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  
  //Handles switching the quote
  handleNewQuote(){
    const colors = ["gray", "blue", "orange", "green", "red", "purple"];
    this.props.onChangeAppColor(colors[Math.floor((Math.random() * 6) + 1)]);
    this.getNewQuote();
  }
  
  //Gets a quote and author from TypeFit API at random
  getNewQuote(){
    const app = this;
    fetch('https://type.fit/api/quotes')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const index = Math.floor((Math.random() * data.length) + 1);
        app.setState({
          quoteText: data[index].text,
          quoteAuthor: data[index].author
        });
      });
  }
  
  render(){
    return (
      <main id="quote-box">
        <div id="quote-content">
          <div id="text">{this.state.quoteText}</div>
          <div id="author">{this.state.quoteAuthor}</div>
        </div>
        <button id="new-quote" onClick={this.handleNewQuote}>Get new Quote</button>
        <a href="https://twitter.com/intent/tweet/?text={ this.state.quoteText }" id="tweet-quote"><i className="fab fa-twitter"></i> Tweet Quote</a>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));