// import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { getOpen } from '../redux/MovieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { open, id } = useSelector(store => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(getOpen(false));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false} // Disable max width constraints
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          overflow: 'hidden',
          width: '50%', // Match the video width
          height: '50%', // Match the video height
          minWidth: 'unset' // Remove minimum width
        }
      }}
    >
      <DialogContent style={{
        padding: 0,
        width: '100%',
        height: '100%'
      }}>
        <VideoBackground movieId={id} bool={true} />
      </DialogContent>
    </Dialog>
  );
}