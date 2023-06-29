import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

const FormDialog = ({title, children, callback, divOpenModal, maxWidth = 'xs'}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box onClick={handleClickOpen}>
        {divOpenModal}
      </Box>
      <Dialog 
        open={open}
        fullWidth={true}
        maxWidth={maxWidth}
        onClose={handleClose}
      >
        <DialogTitle>{title ?? ''}</DialogTitle>
        <DialogContent>
          <Box sx={{ margin: '15px 0'}}>
            {children}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          {callback ? (
            <Button onClick={callback} variant='outlined'>
              Confirm
            </Button>
          ) : ''}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;