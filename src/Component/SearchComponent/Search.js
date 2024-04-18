import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchData } from '../../Redux/productAction';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './search.module.css'
import MobileFilter from '../Filter&Product Component/MobileFilter';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Search=()=>{
    const dispatch=useDispatch();
    const [text,setText]=useState("")
    const [open,setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const HandleChange=(e)=>{
        setText(e.target.value)
    }
    const HandleClick=()=>{
        dispatch(searchData(text)) 
    }

    return <div className={styles.searchDiv}>
        <input onChange={HandleChange} placeholder='Search for products...' style={{width:'300px', height:'30px', outline:'none'}}/>
        <span onClick={HandleClick} className={styles.icon_product} >
            <span>
                <i className="fa fa-search" aria-hidden="true" style={{ fontSize: "35px", cursor:"pointer"}}></i>
            </span>
            <span className={styles.product_fliter} onClick={handleOpen}>
                <i className="fa fa-solid fa-filter"  aria-hidden="true" style={{ fontSize: "35px", cursor:"pointer"}} ></i>
            </span>
         </span>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <MobileFilter />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button onClick={()=>setOpen(false)}>Apply</button>
          </Typography>
        </Box>
      </Modal>
    </div>
}
export default Search;