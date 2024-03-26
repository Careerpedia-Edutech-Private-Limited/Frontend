import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Personal from './Forms/Personaldetails/Personal';
import Contact from './Forms/Contactdetails/Contact';
import College from './Forms/Collegedetails/College';
import { createTheme, ThemeProvider } from '@mui/material';

const steps = [
  {
    label: 'personal details',
    description: <Personal/>,
  },
  {
    label: 'Contact details',
    description:
      <Contact/>,
  },
  {
    label: 'College details',
    description: <College/>,
  },
 
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'italic',
      ].join(','),
    },});

  return (

    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: 1000}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>You have sucessfully registered</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            
          </Button>
        </Paper>
      )}
    </Box>
 

   </ThemeProvider>
     );
}