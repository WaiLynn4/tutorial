"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Controller, useForm } from "react-hook-form";
import { schema } from "./validationSchema";

const CITIES = [
  { value: "yangon", label: "Yangon" },
  { value: "madalay", label: "Mandalay" },
];

const TOWNSHIPS = [
  { value: "yankin", label: "Yankin" },
  { value: "insein", label: "Insein" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      city: "",
      township: "",
    },
  });

  const onSubmit = (formData) => {
    console.log("formData", formData);
    console.log(("Name Input Data,", formData.name));
    reset();
  };

  return (
    <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        fullWidth
        sx={{ mb: 2 }}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        fullWidth
        sx={{ mb: 2 }}
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Phone No."
        fullWidth
        sx={{ mb: 2 }}
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Address"
        fullWidth
        sx={{ mb: 2 }}
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
      />
      <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.city}
      >
        <InputLabel id="city-label">City</InputLabel>
        <Controller
          name="city"
          control={control}
          error={!!errors.city}
          render={({ field }) => (
            <Select {...field} labelId="city-label" value={field.value || ""}>
              {CITIES.map((city, index) => (
                <MenuItem key={index} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.city?.message}</FormHelperText>
      </FormControl>

      <FormControl
        fullWidth
        sx={{ mb: 2 }}
        margin="normal"
        error={!!errors.town}
      >
        <InputLabel id="town-label">Township</InputLabel>
        <Controller
          name="town"
          control={control}
          error={!!errors.town}
          render={({ field }) => (
            <Select {...field} labelId="town-label" value={field.value || ""}>
              {TOWNSHIPS.map((town, index) => (
                <MenuItem key={index} value={town.value}>
                  {town.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.town?.message}</FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit">
        Save
      </Button>
    </Box>
  );
}
