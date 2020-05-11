import React from 'react';
import { DataTable, Text} from 'grommet';
import PokedexTypes from './PokedexTypes/PokedexTypes';

const columns = [
    { property: 'name', header: <Text>Name</Text>, primary: true, },
    {
      property: 'types',
      header: <Text>Types</Text>,
      render: datum => (<PokedexTypes types={datum.types}/>)
    },
    { property: 'number', header: <Text>Number</Text>, },
    { property: 'height', header: <Text>Height</Text>, },
    { property: 'weight', header: <Text>Weight</Text>, },
];

const PokedexTable = ({ pokemonData }) => {
  return(
    <DataTable columns={columns} data={pokemonData}/>
  )
};

export default PokedexTable;