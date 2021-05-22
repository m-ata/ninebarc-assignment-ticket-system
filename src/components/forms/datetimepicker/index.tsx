import * as React from 'react';
import { Grid, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core'
import AppContext from '../../../store/context';
import {
    KeyboardDatePicker,
    KeyboardTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const { useContext, useState } = React

const DateTimePicker = () => {

    const { state, dispatch } = useContext(AppContext);

    const handleDateChange = (date: Date | null) => {
        dispatch({
            type: 'SET',
            field: 'date',
            payload: date
        })
    }

    const handleDurationTypeChange = (event: React.ChangeEvent<{ value: string }>) => {
        dispatch({
            type: 'SET',
            field: 'durationType',
            payload: event.target.value
        })
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
                <Grid item xs={4}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker"
                        label="On"
                        value={state.date}
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
                        value={state.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                <FormControl component="fieldset">
                        <RadioGroup onChange={handleDurationTypeChange} value={state.durationType} aria-label="type" row name="type">
                            <FormControlLabel value="departure" control={<Radio />} label="Departure" />
                            <FormControlLabel value="arrival" control={<Radio />} label="Arrival" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    )
}
export default DateTimePicker