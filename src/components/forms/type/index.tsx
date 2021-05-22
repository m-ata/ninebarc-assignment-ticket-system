import * as React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const Type = () => {

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Hi User!</FormLabel>
            <RadioGroup aria-label="type" row name="type">
                <FormControlLabel value="single" control={<Radio />} label="Single Ticket" />
                <FormControlLabel value="multiple" control={<Radio />} label="Multi Ticket" />
            </RadioGroup>
        </FormControl>
    )
}
export default Type;