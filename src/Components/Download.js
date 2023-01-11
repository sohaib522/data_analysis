import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Draw_bar from './Draw_bar';
import { BarChart } from 'recharts';
import Stack from '@mui/material/Stack';
import Barcharts from './Barcharts';
import { createContext } from 'react';
import Stacked_bar from './Stacked_bar';

const style = {
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Download(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button variant='outlined' onClick={handleOpen}>Download</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{display: "flex",flexDirection:'row'}}  >
          <Draw_bar sites={props.sites} nars={props.nars} />
          <Stacked_bar/>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
