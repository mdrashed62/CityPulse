import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Radio,
  Button,
  Paper,
  TextField,
  Typography,
  Stack,
  IconButton,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/transport-Picsart-AiImageEnhancer.jpg";

const GradientBackground = styled("div")(() => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: 0,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: 900,
  minHeight: 600,
  borderRadius: 24,
  overflow: "hidden",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const WelcomeSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  textAlign: "center",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.up("md")]: {
    width: "40%",
    borderTopRightRadius: "40% 50%",
    borderBottomRightRadius: "40% 50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
    padding: theme.spacing(6, 4),
  },
}));

const FormSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8),
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    border: "none",
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(2),
  },
}));

/* ================= types ================= */

type UserType = "student" | "staff";

interface RegistrationFormData {
  userType: UserType;
  fullName: string;
  email: string;
  department: string;
  batch?: string;
  section?: string;
  studentId?: string;
  idCard?: File | null;
  password: string;
}

/* ================= component ================= */

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegistrationFormData>({
    userType: "student",
    fullName: "",
    email: "",
    department: "",
    batch: "",
    section: "",
    studentId: "",
    idCard: null,
    password: "",
  });

  /* ---------- handlers ---------- */

  const handleChange =
    (field: keyof RegistrationFormData) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleUserTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as UserType;

    setFormData((prev) => ({
      ...prev,
      userType: value,
      batch: "",
      section: "",
      studentId: "",
      idCard: null,
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      idCard: file,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      userType: formData.userType,
      fullName: formData.fullName,
      email: formData.email,
      department: formData.department,
      password: formData.password,

      ...(formData.userType === "student" && {
        batch: formData.batch,
        section: formData.section,
        studentId: formData.studentId,
        idCard: formData.idCard,
      }),
    };

    console.log("📦 Registration Payload:", payload);
  };

  /* ---------- UI ---------- */

  return (
    <GradientBackground>
      <StyledPaper elevation={0} sx={{opacity: 0.85}}>
        {/* Left */}
        <WelcomeSection>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Create your Account
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            or Welcome Back
          </Typography>
          <Typography sx={{ mb: 5, color: "rgba(255,255,255,0.7)" }}>
            Provide your personal details to use all features
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              px: 5,
              py: 1,
              borderWidth: 2,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              "&:hover": {
                borderWidth: 2,
                backgroundColor: "#fff",
                color: "black",
              },
            }}
            onClick={() => navigate("/login")}
          >
            SIGN IN
          </Button>
        </WelcomeSection>

        {/* Right */}
        <FormSection>
          <Box
            sx={{
              maxWidth: 450,
              mx: "auto",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Create Account
            </Typography>

            <form noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormControl>
                  <RadioGroup
                    row
                    value={formData.userType}
                    onChange={handleUserTypeChange}
                    sx={{ justifyContent: "center" }}
                  >
                    <FormControlLabel
                      value="student"
                      control={<Radio />}
                      label="Student"
                    />
                    <FormControlLabel
                      value="staff"
                      control={<Radio />}
                      label="Staff"
                    />
                  </RadioGroup>
                </FormControl>

                <CustomTextField
                  fullWidth
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                />

                <CustomTextField
                  fullWidth
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                />

                <CustomTextField
                  fullWidth
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange("department")}
                />

                {formData.userType === "student" && (
                  <>
                    <CustomTextField
                      fullWidth
                      placeholder="Batch"
                      value={formData.batch}
                      onChange={handleChange("batch")}
                    />
                    <CustomTextField
                      fullWidth
                      placeholder="Section"
                      value={formData.section}
                      onChange={handleChange("section")}
                    />
                    <CustomTextField
                      fullWidth
                      placeholder="Student ID"
                      value={formData.studentId}
                      onChange={handleChange("studentId")}
                    />

                    <Button component="label" variant="outlined">
                      Upload ID Card
                      <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                  </>
                )}

                <CustomTextField
                  fullWidth
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((p) => !p)}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button type="submit" variant="contained" size="large">
                  SIGN UP
                </Button>
              </Stack>
            </form>
          </Box>
        </FormSection>
      </StyledPaper>
    </GradientBackground>
  );
};
