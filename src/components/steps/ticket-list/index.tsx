import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import AppContext from '../../../store/context';
import { getTime } from '../../../helpers/timeparser';
import { Ticket } from '../../../interface'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        },
        cursor: 'pointer',
    },
    selected: {
        backgroundColor: `#6d80e8`,
        cursor: 'pointer'
    }
  }),
);

const { useContext, useState } = React

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: '#3f51b5',
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const TicketList = React.memo(() => {

    const { state, dispatch } = useContext(AppContext);

    const classes = useStyles();

    const [renderTickets, setRenderTickets] = useState([{
        location: `${state?.answers?.from} - ${state?.answers?.to}`,
        time: getTime(state?.answers?.date, state?.answers?.durationType),
        price: `${(Math.floor(Math.random() * 3) + 3) * state?.answers?.ticketUsage},00 €`
    }, {
        location: `${state?.answers?.from} - ${state?.answers?.to}`,
        time: getTime(state?.answers?.date, state?.answers?.durationType),
        price: `${(Math.floor(Math.random() * 3) + 3) * state?.answers?.ticketUsage},00 €`
    }, {
        location: `${state?.answers?.from} - ${state?.answers?.to}`,
        time: getTime(state?.answers?.date, state?.answers?.durationType),
        price: `${(Math.floor(Math.random() * 3) + 3) * state?.answers?.ticketUsage},00 €`
    }]);

    const handleTicket = (selectedTicket: Ticket) => {
        dispatch({
            type: 'SET_TICKET',
            payload: selectedTicket
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Location</StyledTableCell>
                        <StyledTableCell align="right">Time</StyledTableCell>
                        <StyledTableCell align="right">Duration</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderTickets.map((ticket, index) => {
                        const departureDuration = ticket.time.departure.split(':');
                        const arrivalDuration = ticket.time.arrival.split(':');
                        const time = `${departureDuration[0]}:${departureDuration[1]} ${departureDuration[2].split(' ')[1]} dep - ${arrivalDuration[0]}:${arrivalDuration[1]} ${arrivalDuration[2].split(' ')[1]} arr`;
                        return (
                            <TableRow className={ticket.time.duration === state?.ticket?.duration ? classes.selected : classes.root} key={index} onClick={() => handleTicket({
                                location: `${state?.answers?.from} - ${state?.answers?.to}`,
                                time: `${departureDuration[0]}:${departureDuration[1]} ${departureDuration[2].split(' ')[1]} dep - ${arrivalDuration[0]}:${arrivalDuration[1]} ${arrivalDuration[2].split(' ')[1]} arr`,
                                duration: ticket.time.duration,
                                price: `${Math.floor(Math.random() * 3) + 3},00 €`
                            })}>
                                <StyledTableCell component="th" scope="row">
                                    {ticket.location}
                                </StyledTableCell>
                                <StyledTableCell align="right">{time} </StyledTableCell>
                                <StyledTableCell align="right">{ticket.time.duration}</StyledTableCell>
                                <StyledTableCell align="right">{ticket.price}</StyledTableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
})
export default TicketList