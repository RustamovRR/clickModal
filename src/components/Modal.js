import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Card, CardActions, CardContent } from '@material-ui/core';

export default function Modal() {
    const [open, setOpen] = useState(false);
    const [confirm, setConfirm] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    const handleConfirm = () => {
        setConfirm(true)
    };

    return (
        <div>
            <Card style={{ width: 500, height: 300, margin: '100px', fontSize: 20 }}>
                <CardContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro praesentium nam, accusamus necessitatibus iste, eveniet minus adipisci voluptate sint aliquid nobis suscipit, ducimus placeat esse neque minima recusandae hic! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, aspernatur animi quia est expedita sapiente assumenda cupiditate, non minus corporis quaerat praesentium in deserunt eius tempora magni nulla sit architecto?
            </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        {!confirm ? `Remove` : `Undo`}
                    </Button>
                </CardActions>
            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary"
                        onClick={() => {
                            handleClose()
                            handleConfirm()
                        }}
                    >
                        No
                    </Button>
                    <Button onClick={handleClose} color="primary" >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
