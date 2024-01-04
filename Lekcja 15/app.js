class App extends React.Component {
    state = {
        value : ""
    }
    
    handleInputChange = (d) =>{
        this.setState({
            value: d.target.value.toUpperCase()
        })
    }
    handleInputReset = () => {
        this.setState({
            value: ""
        })
    }


    render() {
        return (
            <React.Fragment>
                <input value = {this.state.value} placeholder = 'wpisz' onChange={this.handleInputChange} type="text"/>
                <button onClick={this.handleInputReset}>Reset</button>
                <h1 className="tittle">{this.state.value}</h1>
            </React.Fragment>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('root'))