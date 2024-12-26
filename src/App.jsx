import {
  MenuItem,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Button,
} from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    course: '',
    dob: '',
    gender: '',
  });

  const [error, setError] = useState({});

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Registration completed Successfully 
      Name: ${formData.name}
      Address: ${formData.address}
      Mobile: ${formData.mobile}
      Email: ${formData.email}
      Course: ${formData.course}
      DOB: ${formData.dob}
      Gender: ${formData.gender}`);
    }
  };

  // handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      course: '',
      dob: '',
      gender: '',
    });
    setError({});
  };

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const addressRegex = /^[A-Za-z0-9\s,.-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!formData.name || !nameRegex.test(formData.name)) {
      tempErrors.name = 'Name should only contain letters and spaces';
    }

    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      tempErrors.mobile = 'Mobile number must contain exactly 10 digits';
    }

    if (!formData.address || !addressRegex.test(formData.address)) {
      tempErrors.address =
        'Address can only contain letters, numbers, and common punctuation';
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
    }

    setError(tempErrors);

    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  return (
      <div className="container">
        <div className="form">
          <h1 style={{color:'white'}}>
            Student Registration Form
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb">
              <TextField id='has'
                error={!!error.name}
                helperText={error.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Name"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="mb">
              <TextField
                error={!!error.address}
                helperText={error.address}
                name="address"
                value={formData.address}
                onChange={handleChange}
                label="Address"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="mb">
              <TextField
                error={!!error.mobile}
                helperText={error.mobile}
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                label="Mobile"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="mb">
              <TextField
                error={!!error.email}
                helperText={error.email}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="mb">
              <TextField
                name="course"
                value={formData.course}
                onChange={handleChange}
                select
                label="Course"
                variant="outlined"
                fullWidth
              >
                <MenuItem value="biology">Biology</MenuItem>
                <MenuItem value="computer science">Computer Science</MenuItem>
                <MenuItem value="commerce">Commerce</MenuItem>
                <MenuItem value="humanities">Humanities</MenuItem>
              </TextField>
            </div>
            <TextField
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              label="Date of Birth"
              variant="outlined"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              style={{ width: '220px', marginRight: '20px' }}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{ marginBottom: '10px' }}>
                Gender
              </FormLabel>
              <RadioGroup
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              style={{ marginTop: '20px' }}
            >
              <Button id='reg'

                type="submit"
                variant="contained"
                style={{
                 
                  color: '#fff',
                  borderRadius: '15px',
                }}
              >
                Register
              </Button>
              <Button id='res'
                onClick={handleReset}
                variant="outlined"
                style={{
                  borderColor: '#065044',
                  
                  borderRadius: '15px',
                }}
              >
                RESET
              </Button>
            </Stack>
          </form>
        </div>
      </div>
  );
}

export default App;