/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class App extends React.Component {
  state = {
    options: ["read a book", "practise new language", "eat vegetables","run 10km"],
    option: null,
    value: ""
  }

  handleChooseAdvise = () =>  {
    const index = Math.floor(Math.random() * this.state.options.length)
    this.setState({
      option: this.state.options[index]
    })
  }

  handleChangeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleAddAdvise = (e) => {
    if(this.state.value === "") return alert('please add advice')
    const options = [...this.state.options]
    options.push(this.state.value)
    this.setState({
      options: options,
      value: ""
    })
    alert(`just added next advice:  ${this.state.value}`)
  }



  render() {
    return (
      <React.Fragment>
        <div className="wrap">
      <button className = "draw" onClick = {this.handleChooseAdvise}>Choose random advice</button>
     
      <input
      placeholder = "new advice"
      type="text"
      value = {this.state.value}
      onChange = {this.handleChangeValue}
      />
      <button clasName = "add" onClick = {this.handleAddAdvise}>Add Advice</button>
    <h1>{this.state.option}</h1>
    </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))