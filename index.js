class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: '', price: ''};
  }
  
  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <input onChange={this.handlePrice} value={this.state.price} />
          <button>Lisää</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }
  
  handlePrice(e) {
    this.setState({price: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      price: this.state.price,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: '',
      price: ''
    }));
  }
}

class TodoList extends React.Component {
  
  render() {
    return (
      <ul className="tuotteet">
        {this.props.items.map(item => (
          <li key={item.id}>{item.text + " - "+ item.price+"€"}
            <span onClick={this.remove.bind(this, item)} className="glyphicon glyphicon-remove"></span>
          </li>
        ))}
      </ul>
    );
  }
  
  remove(item){
    const newState = this.state.data;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({data: newState})
    }
  }
  
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));