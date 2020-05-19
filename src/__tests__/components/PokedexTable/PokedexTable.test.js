import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PokedexTable from '../../../components/PokedexTable/PokedexTable'

test('Pikachu is displayed', () => {
  const pokemonData = [{
    name: 'Pikachu',
    types: [{"name": "Electric", "color": "rgb(255,255,0)"}, {"name": "Normal", "color": "RGB(255, 192, 203)"}],
    number: "25",
    height: "1'04",
    weight: "13.2 lbs."
  }];

  const {getByText} = render(<PokedexTable pokemonData={pokemonData}/>);
  expect(getByText('Pikachu')).toBeInTheDocument();
});
