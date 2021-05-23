import * as React from 'react';
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core'
import AppContext from '../../../store/context';

const { useContext } = React

const Type = () => {

    const { state, dispatch } = useContext(AppContext);

    const handleUpdateState = (value: string, field: string) => {
        dispatch({
            type: 'SET_ANSWER',
            field: field,
            payload: value
        })
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={5}>
                    <FormControl component="fieldset">
                        <RadioGroup onChange={(e) => { 
                            handleUpdateState(e.target.value, 'type');
                            e?.target?.value === 'single' && handleUpdateState('1', 'ticketUsage')
                            }} value={state?.answers?.type} aria-label="type" row name="type">
                            <FormControlLabel value="single" control={<Radio color="primary" />} label="Single Ticket" />
                            <FormControlLabel value="multiple" control={<Radio color="primary" />} label="Multi Ticket" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {
                    state?.answers?.type === 'multiple' &&
                    <Grid item xs={7}>
                        <Grid container alignItems={'center'}>
                            <Grid item xs={10}>
                                <FormLabel component="legend">How many times you want to use this ticket ?</FormLabel>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    fullWidth
                                    size={'small'}
                                    id="ticker-used"
                                    variant={'outlined'}
                                    inputProps={{ min: '1', max: '7' }}
                                    type="number"
                                    value={state?.answers?.ticketUsage}
                                    onChange={(e) => { handleUpdateState(e.target.value, 'ticketUsage') }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </React.Fragment>
    )
}
export default Type;