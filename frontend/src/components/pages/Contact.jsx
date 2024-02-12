import React, {useState} from 'react'
import Layout from '../providers/Layout';
import { TextField, Button, Grid, Card, CardContent, Typography, Link, Box } from '@mui/material';
import { Email, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const response = await fetch('http://127.0.0.1:8000/send-email/', {
        const response = await fetch(`https://www.ioh-nishijima.com/send-email/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Something went wrong');
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  };

  const openInPopup = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    window.open(href);
  };
  return (
    <>
      <Layout title="Contact">
        <Card sx={{ minWidth: 275 , mt:3}}>
          <CardContent>
            <Typography sx={{mb: 0.5}} variant="h5" component="div" alignItems="center">
              Information
            </Typography>
            <Box display="flex" alignItems="center" sx={{ mb: 1.5 }} color="text.secondary">
              <Email /><Link sx={{ml: 0.5}} href="mailto:nishijima.io.hm@tut.jp">email</Link>
            </Box>
            <Box display="flex" alignItems="center" sx={{ mb: 1.5 }} color="text.secondary">
              <GitHub />
              <Link 
                sx={{ml: 0.5}}
                href="https://github.com/iohnishijima" 
                onClick={openInPopup}
                style={{ cursor: 'pointer' }}
              >GitHub</Link>
            </Box>
            <Box display="flex" alignItems="center" sx={{ mb: 1.5 }} color="text.secondary">
              <LinkedIn />
              <Link 
                sx={{ml: 0.5}}
                href="https://www.linkedin.com/in/ioh-nishijima-134365262/" 
                onClick={openInPopup}
                style={{ cursor: 'pointer' }}
              >Linkedin</Link>
            </Box>
            <Box display="flex" alignItems="center" sx={{ mb: 1.5 }} color="text.secondary">
              <LocationOn />
              <Link 
                sx={{ml: 0.5}}
                href="https://maps.app.goo.gl/hZskSqw41YvRAsDy8?g_st=ic" 
                onClick={openInPopup}
                style={{ cursor: 'pointer' }}
              >Finland</Link>
            </Box>
          </CardContent>
        </Card>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} maxWidth={"xl"} marginTop={2}>
            <Grid item xs={12}>
              <TextField 
                label="Name" 
                name="name" 
                fullWidth 
                required 
                value={form.name} 
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Email" 
                name="email" 
                type="email" 
                fullWidth 
                required 
                value={form.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
                value={form.message}
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Layout>
    </>
  )
}

export default Contact
