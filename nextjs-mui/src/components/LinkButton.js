"use client";

import { Button } from "@mui/material";
import Link from "next/link";


export default function LinkButton({ href, children }) {
    return(
        <Link href={href} passHref>
            <Button variant="outlined">{children}</Button>
        </Link>
    );
}