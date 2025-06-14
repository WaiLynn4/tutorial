"use client";
import { Box ,Typography } from "@mui/material";

export default function Footer() {
    return(
        <Box sx={{ bgcolor: "grey.200", p: 2, textAlign: "center", mt: 4 }}>
            <Typography variant="body2">© 2025 Myapp. All rights reserved.</Typography>
        </Box>
    )
}