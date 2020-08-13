class Botao extends React.Component {
    render() {
        return (
            <button onClick={()=>{
                this.props.status === 0 ? this.props.funcaoTrocar(1) : this.props.funcaoTrocar(0);
            }}>
            {this.props.status === 1 ? 'Desabilitar' : 'Habilitar'}
            </button>
        );
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            status:0
        };
        this.trocarStatus = this.trocarStatus.bind(this);
    }
    trocarStatus(novoStatus){
        this.setState(
            { status: novoStatus }
        );
    }
    render() {
        return (
            <div>
                <p>{this.state.status === 1 ? 'Habilitado' : 'Desabilitado'}</p>

                <Botao status={this.state.status} funcaoTrocar={this.trocarStatus} />
            </div>
        );
    }
}

let elemento = (
    <div>
        <App/>
    </div>   
);

ReactDOM.render(elemento, document.getElementById('app'));