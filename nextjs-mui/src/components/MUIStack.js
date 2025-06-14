"use client";
import { Stack, Button } from "@mui/material";

export default function MUIStack() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">One</Button>
      <Button variant="contained">Two</Button>
    </Stack>
  );
}
