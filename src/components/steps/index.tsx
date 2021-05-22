import * as React from 'react';
import Name from './name';
import Type from './type';
import Location from './location';
import DateTimePicker from './datetimepicker'
import TicketList from './ticket-list'

const Steps = ({activeStep}: any) => {

    const steps = [<Name/>, <Type />, <Location />, <DateTimePicker />, <TicketList />]

    return (
        <>
            {
                steps[activeStep]
            }
        </>
    )
}
export default Steps;