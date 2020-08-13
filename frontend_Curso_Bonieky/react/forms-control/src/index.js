/* class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: 'eduardo@example.com',
            texto: 'I wrote something here',
            sexo: 'masculino'
            
        };
        this.emailTrocou = this.emailTrocou.bind(this);
        this.sexoMudou = this.sexoMudou.bind(this);
        this.textoMudou = this.textoMudou.bind(this);
    }

    emailTrocou(e){
        let novoValue = e.target.value;

        this.setState({email: novoValue});
    }

    sexoMudou(s){
        this.setState({sexo: s.target.value});
    }

    textoMudou(t){
        this.setState({texto: t.target.value});
    }

    render() {
        return (
            <form method="POST">
                <input type="email" name="email" value={this.state.email} onChange={this.emailTrocou}/><br/>
                <input type="password" name="password" placeholder="Password"/> <br/>
                <textarea name="body" value={this.state.texto} onChange={this.textoMudou}></textarea> <br/>
                <select name="options" value={this.state.sexo} onChange={this.sexoMudou}>
                    <option ></option>
                    <option value="masculino">masculino</option>
                    <option value="feminino">feminino</option>
                </select>
                <input type="submit" name="submit" /><hr/>
            </form>
        );
    }
}

let elemento = (
    <div>
        <Login/>
    </div>   
);

ReactDOM.render(elemento, document.getElementById('app')); */


//Controlando formulários com multiplos inputs

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formValues: { 
                email: 'eduardo@example.com',
                body: 'I wrote something here',
                options: 'masculino'
             }
            
        };
        this.inputTrocou = this.inputTrocou.bind(this);
    }

    inputTrocou(e) {
        let formValues = this.state.formValues;

        formValues[e.target.name] = e.target.value;
        
        this.setState({formValues});
    }
    render() {
        return (
            <form method="POST">
                <input type="email" name="email" value={this.state.formValues.email} onChange={this.inputTrocou}/><br/>
                <input type="password" name="password" placeholder="Password"/> <br/>
                <textarea name="body" value={this.state.formValues.body} onChange={this.inputTrocou}></textarea> <br/>
                <select name="options" value={this.state.formValues.options} onChange={this.inputTrocou}>
                    <option ></option>
                    <option value="masculino">masculino</option>
                    <option value="feminino">feminino</option>
                </select>
                <input type="submit" name="submit" /><hr/>
            </form>
        );
    }
}

let elemento = (
    <div>
        <Login/>
    </div>   
);

ReactDOM.render(elemento, document.getElementById('app'));