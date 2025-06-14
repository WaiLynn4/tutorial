"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Profile () {
    return (
        <div>
            <Typography variant="h4">Profile Page</Typography>
            <Link href="/setting" passHref> 
            <Button variant="contained">Go to Setting</Button>
            </Link>
        </div>
    );
}