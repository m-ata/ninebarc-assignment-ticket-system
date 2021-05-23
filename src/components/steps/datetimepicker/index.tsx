import * as React from 'react';
import { Grid, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core'
import AppContext from '../../../store/context';
import {
    KeyboardDatePicker,
    KeyboardTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const { useContext } = React

const DateTimePicker = () => {

    const { state, dispatch } = useContext(AppContext);

    const handleDateChange = (date: Date | null) => {
        dispatch({
            type: 'SET_ANSWER',
            field: 'date',
            payload: date
        })
    }

    const handleDurationTypeChange = (event: React.ChangeEvent<{ value: string }>) => {
        dispatch({
            type: 'SET_ANSWER',
            field: 'durationType',
            payload: event.target.value
        })
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container alignItems={'center'}>
                <Grid item xs={4}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker"
                        label="On"
                        value={state?.answers?.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="At"
                        value={state?.answers?.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormControl component="fieldset" style={{marginTop: 10}}>
                        <RadioGroup onChange={handleDurationTypeChange} value={state?.answers?.durationType} aria-label="type" row name="type">
                            <FormControlLabel value="departure" control={<Radio color="primary" />} label="Departure" />
                            <FormControlLabel value="arrival" control={<Radio color="primary" />} label="Arrival" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    )
}
export default DateTimePicker