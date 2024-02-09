import React from 'react';
import Layout from '../providers/Layout';
import { Card, CardContent, Link } from '@mui/material';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const openInPopup = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    window.open(href);
  };
  return (
    <>
      <Layout title="Projects">
        <Card sx={{ minWidth: 275, mt: 3, minHeight: 500 }} elevation={8}> 
          <CardContent>
            <Link
              sx={{ mb: 3 }}
              variant="h5"
              component="div"
              textAlign="center"
              href="https://iohnishijima.github.io/CornelBox/"
              style={{ cursor: 'pointer' }}
              onClick={openInPopup}
            >
            Cornel Box
            </Link>
            <iframe
              src={"https://iohnishijima.github.io/CornelBox/"}
              width={"100%"}
              height={"450px"}
              style={{ border: 'none', borderRadius: '4px' }}
              title="External Content"
            ></iframe>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, mt: 3, minHeight: 500 }} elevation={8}> 
          <CardContent>
            <Link
              sx={{ mb: 3 }}
              variant="h5"
              component="div"
              textAlign="center"
              href="https://iohnishijima.github.io/Image-processing/"
              style={{ cursor: 'pointer' }}
              onClick={openInPopup}
            >
            Image Processing
            </Link>
            <iframe
              src={"https://iohnishijima.github.io/Image-processing/"}
              width={"100%"}
              height={"450px"}
              style={{ border: 'none', borderRadius: '4px' }}
              title="External Content"
            ></iframe>
          </CardContent>
        </Card>
      </Layout>
    </>
  )
}

export default Projects;
