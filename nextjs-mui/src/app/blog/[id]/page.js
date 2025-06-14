"use client";

import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";

//Dynamic Route Page
//Params : id


export default function BlogDetail() {
    const params = useParams();
    console.log('Blog ID: ', params.id);
    
    return(
        <Box>
            <Typography>BlogDetail</Typography>
        </Box>
    );

}