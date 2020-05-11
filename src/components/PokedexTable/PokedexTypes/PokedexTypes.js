import React from 'react';
import { Button, Box } from 'grommet';
import { contrast } from '../../../lib/contrast-color';

const buildStyleForButton = baseColor => ({
  backgroundColor: baseColor,
  color: contrast(baseColor)
});

const buildTypeButton = type => (<Button label={type.name} style={buildStyleForButton(type.color)}/>);

const PokedexTypes = ({ types }) => {
  const buttons = types.map(buildTypeButton);

  return (
    <Box>
      { buttons }
    </Box>
  )
};

export default PokedexTypes;