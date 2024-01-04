class App extends React.Component {
    state = {
        value : ""
    }
    
    handleInputChange = (d) =>{
        console.log("Zawartość w evencie: " + d.target.value)
        console.log("Zawartość value przed setState: " + this.state.value)
        this.setState({
            value: d.target.value.toUpperCase()
        })
        console.log("Zawartość value po setState: " + this.state.value)
    }
    handleInputReset = () => {
        this.setState({
            value: ""
        })
    }


    render() {
        console.log("Zawartość value w trakcie metody render: " + this.state.value);
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