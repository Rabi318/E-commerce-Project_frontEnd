import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';

const OrderDetails = () => {
  return(
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
      <AddressCard/>
      </div>
      <div className="py-20 ">
        <OrderTracker activeStep={3}></OrderTracker>
      </div>
      <Grid container className="space-y-5">
        {[1,1,1,1,1].map( (item) =>  <Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:"space-between"}}>
          <Grid item xs={6}>
            <div className="flex items-center space-x-2">
              <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/7/n/l/-original-imaggyeugbghgfdg.jpeg?q=70" alt="" />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Fit Rise Blue Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color: Blue</span> <span>Size: M</span></p>
                <p>Seller: Linaria</p>
                <p>$1099</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:deepPurple[500]}}>
              <StarIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl"></StarIcon>
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
       
      </Grid>
    </div>
  )
}

export default OrderDetails