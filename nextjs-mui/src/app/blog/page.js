"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";


export default function BlogList() {
    return(
        <Box>
            <Typography>BlogList Page</Typography>
            <Link href="/blog/1" passHref> 
            <Button>Go to Blog 1</Button>
            </Link>
             <Link href="/blog/2" passHref> 
            <Button>Go to Blog 2</Button>
            </Link>
        </Box>
    )
}