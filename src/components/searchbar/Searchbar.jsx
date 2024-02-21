import React, { Component } from 'react';
import '../styles.css';

export default class Searchbar extends Component {
  state = { search: '' };

  handleChange = evt => {
    this.setState({ search: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const optimizeValue = this.state.search.trim().toLowerCase();
    this.props.handleFilter(optimizeValue);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">GO</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
