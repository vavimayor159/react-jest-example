import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PokedexTable from '../../../components/PokedexTable/PokedexTable'

test('Pikachu is displayed', () => {
  const pokemonData = [{
    name: 'Pikachu'
  }];

  render(<PokedexTable pokemonData={pokemonData}/>);
  screen.getByText('Pikachu').toBeInTheDocument();
});

test('Elements are sorted by pokedex number', () => {

});