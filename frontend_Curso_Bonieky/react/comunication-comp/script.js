class Temperatura extends React.Component {
    render() {
        let temp = parseFloat(this.props.temp);

        if(this.props.escala == 'f'){
            temp = (temp * 9/5) + 32;
        } 
        return (
            <div>
                Temperatura em {this.props.escala.toUpperCase()}: {temp}
                {this.props.escala === 'c' ? 'ºC' : 'ºF'}
            </div>

        );
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            temperatura: 20
        };
    this.tempChange = this.tempChange.bind(this);
    }

    tempChange(novaTemp){
        this.setState(
            { temperatura: novaTemp.target.value }
        );
    }
    
    render() {
        return (
            <div>
                <input type="number" value={this.state.temperatura} onChange={this.tempChange} />
                <Temperatura temp={this.state.temperatura} escala="c" />
                <Temperatura temp={this.state.temperatura} escala="f" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));