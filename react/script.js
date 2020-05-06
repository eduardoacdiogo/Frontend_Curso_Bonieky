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

function Bemvindo(props) {
    return ( 
        <div>
        <h1> Seja bem vindo </h1>
        <h3> {props.nome} </h3> 
        </div>
    );
}
let elemento2 = ( 
    <div>
    <Bemvindo nome="Eduardo" />

    <hr/>

    <Bemvindo nome="Andre"/>
    </div>
);

ReactDOM.render(elemento2, document.getElementById('app2'));