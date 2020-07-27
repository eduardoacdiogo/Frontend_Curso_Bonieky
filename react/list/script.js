class Post extends React.Component {
    render(){
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.body}</p>
                <hr/>
            </div>
        );
    }
}
class Aviso extends React.Component {
    constructor(props){
        super (props);        
        this.state = {
            posts: [
                {id:1, title: 'Titulo do post 1', body: 'corpo do post 1' },
                {id:2, title: 'Titulo do post 2', body: 'corpo do post 2' },
                {id:3, title: 'Titulo do post 3', body: 'corpo do post 3' },
                {id:4, title: 'Titulo do post 4', body: 'corpo do post 4' },
                {id:5, title: 'Titulo do post 5', body: 'corpo do post 5' },
                {id:6, title: 'Titulo do post 6', body: 'corpo do post 6' }
            ]
        };
    }

    render() {
        return (
            <div>
                { this.state.posts.map((item) => 
                    <Post key={item.id} title = {item.title} body={item.body} />
                )
                } 
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