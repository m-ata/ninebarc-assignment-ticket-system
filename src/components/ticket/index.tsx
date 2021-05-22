import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppContext from '../../store/context';

const { useContext, useState } = React

const Ticket = ({resetState}: any) => {

    const { state } = useContext(AppContext);

    const [isDialogOpen, setDialogOpen] = useState(true);

    const handleComplete = () => {
        setDialogOpen(false);
        resetState();
    }

    return (
        <Dialog
        open={isDialogOpen}
        onClose={handleComplete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            {`Hi ${state?.answers?.name} Your Ticket is Ready :)`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                {state?.ticket?.location}
                {state?.ticket?.time}
                {state?.ticket?.duration}
                {state?.ticket?.price}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleComplete} color="primary" autoFocus>
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    )
}
export default Ticket;