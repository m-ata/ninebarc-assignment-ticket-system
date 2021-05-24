import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppContext from '../../store/context';

const { useContext, useState } = React

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 320,
    },
});

const Ticket = ({ resetState }: any) => {

    const { state } = useContext(AppContext);

    const classes = useStyles();

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
            disableBackdropClick
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">
                {`Hi ${state?.answers?.name} Your Ticket is Ready :)`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={'https://images.all-free-download.com/images/graphicthumb/double_decker_bus_556723.jpg'}
                            title="Bus Imagee"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Ticket Details
                            </Typography>
                            <Typography color="textSecondary" component="div">
                                Location : {state?.ticket?.location}
                            </Typography>
                            <Typography color="textSecondary" component="div">
                                Time : {state?.ticket?.time}
                            </Typography>
                            <Typography color="textSecondary" component="div">
                                Duration : {state?.ticket?.duration}
                            </Typography>
                            <Typography color="textSecondary" component="div">
                                Price : {state?.ticket?.price}
                            </Typography>
                        </CardContent>

                    </Card>
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