/*let elemento = <h1 className="titulo"> Olá, Mundo!</h1>;*/

/* let titulo = React.createElemento( 'h1', { className = 'titulo' }, 'Olá, Mundo 2.0' ); */
/*
let titulo = < h1 className = "titulo" > Olá,
    Mundo 3.0 < /h1>; 

let elemento = < h2 className = "horas" > Agora são: { new Date().toLocaleDateString() } < /h2>; 

ReactDOM.render(titulo, document.getElementById('app'));
*/
function mostrarHora() {

    let elemento = <div>
        <h1> Olá, Usuário </h1>  
        <h3 className = "hora" > Agora são: { new Date().toLocaleTimeString() } </h3>  
        </div>

        ReactDOM.render(elemento, document.getElementById('app'));
}

setInterval(mostrarHora, 1000);

/*function Bemvindo(props) {
    return ( 
        <div>
        <h1> Seja bem vindo </h1>
        <h3> {props.nome} </h3> 
        </div>
    );
}
*/
//criando o componente a cima mas de forma mais eficiente
class Bemvindo extends React.Component {
    render () {
        return ( 
        <div>
        <h1> Seja bem vindo </h1>
        <h3> {this.props.nome} </h3> 
        </div>
    );
    }
}

let elemento2 = ( 
    <div>
    <Bemvindo nome="Eduardo" />

    <hr/>

    <Bemvindo nome="Andre"/>
    </div>
);

ReactDOM.render(elemento2, document.getElementById('app2'));

class Post extends React.Component {
    render() {
        return (
            <div>
                <PostTopo autor={this.props.nome} />
                <PostCorpo />
                <PostRodaPe likes={this.props.likes} comentarios={this.props.comentarios} />
            </div>

        );
    }
}

class PostTopo extends React.Component {
    render() {
        return (
            <div>
                {this.props.autor}
            </div>
        );
    }
}
class PostCorpo extends React.Component {
    render() {
        return (
            <div>
               ...
            </div>
        );
    }
}
class PostRodaPe extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.likes} Curtidas</p>
                <p>{this.props.comentarios} Comentarios</p>
                <hr/>
            </div>
        );
    }
}
let elemento3 = (
    <div>
        <Post nome="Jose" likes="32" comentarios="10" />
        <Post nome="Flavia" likes="100" comentarios="46" />
        <Post nome="Paulo" likes="320" comentarios="4" />
    </div>
);

ReactDOM.render(elemento3, document.getElementById('app3'));

class Relogio extends React.Component {
    
    constructor (props){
        super(props);
        this.state = {
            hora:'00:00:00'
        };

        setInterval(() =>{
            this.setState({hora:new Date().toLocaleTimeString()});
        },1000);
    }

    render() {
        return (
            <div>
                <h1>Horário: </h1>
                <h2>{this.state.hora}</h2>
            </div>
        );
    }
}

let elemento4 = (
    <div>
        <Relogio />
    </div>
);

ReactDOM.render(elemento4, document.getElementById('app4'));
