import React, { Component } from 'react';
import reactDom from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term : props.key ? props.key : ''};
    this.props.onSearchTermChange(this.state.term);
  }


  render() {
    return (
      <div className="search-bar">
        <input value = {this.state.term} onChange={this.onInputChange.bind(this)} /><br/>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({term : event.target.value});
    if(this.state.term.length > 3) {
      this.props.onSearchTermChange(this.state.term);
    }
  }
}

export default SearchBar;
