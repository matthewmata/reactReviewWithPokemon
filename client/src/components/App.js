import React from 'react';
import Search from './Search';
import PokemonList from './PokemonList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTrash = this.handleTrash.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < 152; i++) {
      this.props.getPokemon(i, (data) => {
        this.setState({pokemon: [...this.state.pokemon, data.data]})
      });
    }
  }

  handleSearch(query) {
    this.props.getPokemon(query, (data) => {
      this.setState({pokemon: [data.data, ...this.state.pokemon]})
    });
  }

  handleTrash(index) {
    this.state.pokemon.splice(index, 1);
    this.setState({
      pokemon: this.state.pokemon
    })
  }

  render() {
    return (
      <div>
        <Search getPokemon={this.props.getPokemon} handleSearch={this.handleSearch}/>
        <PokemonList pokemon={this.state.pokemon} handleTrash={this.handleTrash}/>
      </div>
    )
  }
}

export default App;