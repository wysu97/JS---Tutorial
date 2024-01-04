class Message extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            messageIsActive : false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {

        this.setState({
            messageIsActive : !this.state.messageIsActive
        })
    }
    

    render(){
        console.log(this.state.messageIsActive);
        const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto deserunt itaque, enim voluptatem alias repellat praesentium saepe possimus, in, nobis mollitia fugiat ab. Sed animi placeat commodi nihil nostrum!';
        return (
            <>
                <button onClick={this.handleClick}>{this.state.messageIsActive ? 'Ukryj': "Pokaż"}</button>
                {/* <p>{this.state.messageIsActive ? text : ""}</p> */}
                {
                    // this.state.messageIsActive ? <p>{text}</p>: null
                    this.state.messageIsActive && <p>{text}</p>
                }
            </>
        )
    }
}

ReactDOM.render(<Message/>, document.getElementById('root'))