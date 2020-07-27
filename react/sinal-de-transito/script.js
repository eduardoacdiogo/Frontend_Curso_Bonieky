class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 20,
    };
    this.vChange = this.vChange.bind(this);
  }

  vChange(valor) {
    this.setState({ valor });
  }
  render() {
    return (
      <div>
        <Moeda valor={this.state.valor} moeda="real" mudar={this.vChange} />
        <Moeda valor={this.state.valor} moeda="dollar" mudar={this.vChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
