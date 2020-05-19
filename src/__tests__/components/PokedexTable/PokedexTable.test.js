import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PokedexTable from '../../../components/PokedexTable/PokedexTable'

test('Pikachu is displayed', () => {
  const pokemonData = [{
    name: 'Pikachu'
  }];

  const {getByText} = render(<PokedexTable pokemonData={pokemonData}/>);
  getByText('Pikachu').toBeInTheDocument();
});

