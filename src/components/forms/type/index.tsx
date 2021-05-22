import * as React from 'react';
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core'
import AppContext from '../../../store/context';

const { useContext } = React

const Type = () => {

    const { state, dispatch } = useContext(AppContext);

    const handleUpdateState = (event: React.ChangeEvent<{ value: string }>, field: string) => {
        dispatch({
            type: 'SET',
            field: field,
            payload: event.target.value
        })
    }



    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={6}>
                    <FormControl component="fieldset">
                        <RadioGroup onChange={(e) => { handleUpdateState(e, 'type') }} value={state.type} aria-label="type" row name="type">
                            <FormControlLabel value="single" control={<Radio />} label="Single Ticket" />
                            <FormControlLabel value="multiple" control={<Radio />} label="Multi Ticket" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            {
                state?.type === 'multiple' &&
                <>
                    <FormLabel component="legend">How many times you want to use this ticket ?</FormLabel>
                    <TextField
                        id="ticker-used"
                        inputProps={{ min: '1', max: '7' }}
                        type="number"
                        value={state.ticketUsage}
                        onChange={(e) => { handleUpdateState(e, 'ticketUsage') }}
                    />
                </>
            }
        </React.Fragment>
    )
}
export default Type;