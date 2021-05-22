import * as React from 'react';
import Name from '../forms/name';
import Type from '../forms/type';

const Steps = ({activeStep}: any) => {

    const steps = [<Name/>, <Type />]

    return (
        <>
            {
                steps[activeStep]
            }
        </>
    )
}
export default Steps;