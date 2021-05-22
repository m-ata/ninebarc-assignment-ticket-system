import * as React from 'react';
import Name from '../forms/name';
import Type from '../forms/type';
import Location from '../forms/location';
import DateTimePicker from '../forms/datetimepicker'

const Steps = ({activeStep}: any) => {

    const steps = [<Name/>, <Type />, <Location />, <DateTimePicker />]

    return (
        <>
            {
                steps[activeStep]
            }
        </>
    )
}
export default Steps;