import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PokedexTypes from '../../../../components/PokedexTable/PokedexTypes/PokedexTypes'

test ("Types_mustHave_name_color",() => {
    const testType = [{"name":"test","color":"rgb(0,0,0)"}]

    const {getByText} = render(<PokedexTypes types={testType} />);
    expect(getByText('test')).toBeInTheDocument();
})