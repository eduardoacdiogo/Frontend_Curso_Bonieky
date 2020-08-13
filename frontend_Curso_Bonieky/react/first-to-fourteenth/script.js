
/*let elemento = <h1 className="titulo"> Olá, Mundo!</h1>;*/

/* let titulo = React.createElemento( 'h1', { className = 'titulo' }, 'Olá, Mundo 2.0' ); */
/*
let titulo = < h1 className = "titulo" > Olá,
    Mundo 3.0 < /h1>; 

let elemento = < h2 className = "horas" > Agora são: { new Date().toLocaleDateString() } < /h2>; 

ReactDOM.render(titulo, document.getElementById('app'));
*/
/*
function mostrarHora() {

    let elemento = <div>
        <h1> Olá,
        Usuário </h1>   <h3 className = "hora" > Agora são: { new Date().toLocaleTimeString() } </h3>   </div>

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
// class Bemvindo extends React.Component {
//     render() {
//         return ( <
//             div >
//             <
//             h1 > Seja bem vindo </h1> <
//             h3 > { this.props.nome } </h3>  </div >
//         );
//     }
// }

// let elemento2 = ( <
//     div >
//     <
//     Bemvindo nome = "Eduardo" / >

//     <
//     hr / >

//     <
//     Bemvindo nome = "Andre" / >
//     </div>
// );

// ReactDOM.render(elemento2, document.getElementById('app2'));

// class Post extends React.Component {
//     render() {
//         return ( <
//             div >
//             <
//             PostTopo autor = { this.props.nome }
//             /> <
//             PostCorpo / >
//             <
//             PostRodaPe likes = { this.props.likes }
//             comentarios = { this.props.comentarios }
//             /> </div >

//         );
//     }
// }

// class PostTopo extends React.Component {
//     render() {
//         return ( 
//         <div>  { this.props.autor } </div>
//         );
//     }
// }
// class PostCorpo extends React.Component {
//     render() {
//         return ( 
//             <div>
//             ... </div>
//         );
//     }
// }
// class PostRodaPe extends React.Component {
//     render() {
//         return ( <
//             div >
//             <
//             p > { this.props.likes }
//             Curtidas </p> <
//             p > { this.props.comentarios }
//             Comentarios </p> <
//             hr / >
//             </div>
//         );
//     }
// }
// let elemento3 = ( <
//     div >
//     <
//     Post nome = "Jose"
//     likes = "32"
//     comentarios = "10" / >
//     <
//     Post nome = "Flavia"
//     likes = "100"
//     comentarios = "46" / >
//     <
//     Post nome = "Paulo"
//     likes = "320"
//     comentarios = "4" / >
//     </div>
// );

// ReactDOM.render(elemento3, document.getElementById('app3'));
// /*
// class Relogio extends React.Component {
//     //primeira parte a ser implementada
//     constructor(props) {
//         super(props);
//         this.state = {
//             hora: '00:00:00'
//         };
//     }
//     //segunda parte a ser implementada
//     componentDidMount() {
//             this.timer = setInterval(() => {
//                 this.setState({ hora:new Date().toLocaleTimeString() });
//             }, 1000);
//         }
//         //quando o componente é atualizado ele implementa
//     componentDidUpdate() {
//             console.log("Componente foi atualizado");
//         }
//         //quando o componente for destruido
//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }
//     shouldComponentUpdate() {

//     }
//     render() {
//         return ( <div >
//             <h1> Horário: </h1> 
//             <h2> { this.state.hora } </h2> 
//             </div>
//         );
//     }
// }

// let elemento4 = ( 
//     <div>
//     <Relogio />
//     </div>
// );

// ReactDOM.render(elemento4, document.getElementById('app4'));*/

// //Eventos em Componentes

// class Pessoa extends React.Component {

//     constructor(props) {
//         super (props);
//         this.state = {
//             nome: this.props.nome
//         };
//         this.limparNome = this.limparNome.bind(this);
//         this.setNome = this.setNome.bind(this);
//     }


//     limparNome(){
//         this.setState(
//             {nome:' '}
//         );
//     }

//     setNome(nome){
//         this.setState({nome});
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Olá, meu nome é {this.state.nome}</h1>
//                 <button onClick={this.limparNome}>Limpar Nome</button>
//                 <hr/>
//                 <button onClick={()=> {alert("Clicou")}}>Limpar Nome</button>
//                 <hr/>
//                 <button onClick={()=> {this.setNome('João')}}>Mudar o nome para João</button>
//             </div>        
//         );
//     }
// }

// let elemento5 = (
//     <div>
//         <Pessoa nome="Eduardo" />
//     </div>
// );

// ReactDOM.render(elemento5, document.getElementById('app5'));
// 
//Rederizacao condicional
/*
class Login extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            status: 1
        };
        this.ativar = this.ativar.bind(this);
        this.desativar = this.desativar.bind(this);
    }

    ativar(){
        this.setState(
            {status:1}
        );
    }
    desativar(){
        this.setState(
            { status:0 }
        );
    }

    render() {
        let statusMsg;
        let statusBtn;

        if(this.state.status == 1){
            statusMsg = 'Ativado';
            statusBtn = <button onClick={this.desativar}>Desativar</button>;
        }
        else{
            statusMsg = 'Desativado';
            statusBtn = <button onClick={this.ativar}>Ativar</button>;
        }
        return (
            <div>
                <p>Status: {statusMsg}</p>  
                {statusBtn}
            </div>
        );
    }
}

let elemento6 = (
    <div>
        <Login />
    </div>
);

ReactDOM.render(elemento6, document.getElementById('app6'));
*/
class Aviso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logado: false,
            msg: [1,2,3,4,5,6,7]
        };
    }
    render() {
        return (
            <div>
                {this.state.msg.length > 0 && 
                    <h2>Você possui {this.state.msg.length} mensagens não lida.</h2>
                }
                <hr/>
                <h3>
                    O Usuário {this.state.logado ? '' : 'não'} está logado.
                </h3>
                <hr/>
                <div>
                    {this.state.logado ? (
                        <p>Você está logado.</p>
                    ) : (
                        <p>Você não está logado.</p>
                    )}
                </div>
            </div>
        );
    }
}

let elemento = (
    <div>
        <Aviso />
    </div>
);

ReactDOM.render(elemento, document.getElementById('app'));