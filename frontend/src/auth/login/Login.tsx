import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
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
  Radio,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../../assets/transport-Picsart-AiImageEnhancer.jpg'

/* ================= styles ================= */

const GradientBackground = styled('div')(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: 0,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 900,
  minHeight: 500,
  borderRadius: 24,
  overflow: 'hidden',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const WelcomeSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.up('md')]: {
    width: '40%',
    borderTopRightRadius: '40% 50%',
    borderBottomRightRadius: '40% 50%',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    borderBottomLeftRadius: '50% 20%',
    borderBottomRightRadius: '50% 20%',
    padding: theme.spacing(6, 4),
  },
}));

const FormSection = styled(Box)(({ theme }) => ({
  background: '#fff',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8),
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    border: 'none',
    '& fieldset': { border: 'none' },
    '&:hover fieldset': { border: 'none' },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(),
  },
}));

/* ================= types ================= */

type UserType = 'student' | 'staff' | 'driver';

interface LoginFormData {
  userType: UserType;
  email: string;
  password: string;
}

/* ================= component ================= */

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    userType: 'student',
    email: '',
    password: '',
  });

  /* ---------- handlers ---------- */

  const handleChange =
    (field: keyof LoginFormData) =>
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
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      userType: formData.userType,
      email: formData.email,
      password: formData.password,
    };

    console.log('Login Payload:', payload);
  };

  /* ---------- UI ---------- */

  return (
    <GradientBackground sx={{ padding: '16px' }}>
      <StyledPaper elevation={0} sx={{opacity: 0.85}}>
        {/* Left */}
        <WelcomeSection>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Sign-In
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            or Do not have an Account?
          </Typography>
          <Typography sx={{ mb: 5, color: 'rgba(255,255,255,0.7)' }}>
            Please Sign-Up
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              px: 5,
              py: 1,
              borderWidth: 2,
              fontSize: '1rem',
              letterSpacing: '0.05em',
              '&:hover': {
                borderWidth: 2,
                backgroundColor: '#fff',
                color: 'black',
              },
            }}
            onClick={() => navigate('/register')}
          >
            SIGN UP
          </Button>
        </WelcomeSection>

        {/* Right */}
        <FormSection>
          <Box sx={{ maxWidth: 400, mx: 'auto', width: '100%', textAlign: 'center' }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Sign-In
            </Typography>

            <form noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {/* User Type */}
                <FormControl>
                  <RadioGroup
                    row
                    value={formData.userType}
                    onChange={handleUserTypeChange}
                    sx={{ justifyContent: 'center' }}
                  >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                    <FormControlLabel value="driver" control={<Radio />} label="Driver" />
                  </RadioGroup>
                </FormControl>

                {/* Email */}
                <CustomTextField
                  fullWidth
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                />

                {/* Password */}
                <CustomTextField
                  fullWidth
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange('password')}
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
                  Sign-In
                </Button>
              </Stack>
            </form>
          </Box>
        </FormSection>
      </StyledPaper>
    </GradientBackground>
  );
};
