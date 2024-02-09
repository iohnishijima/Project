import React, { useState } from 'react'
import { ImageList, ImageListItem, Dialog, Card, CardContent, useMediaQuery, useTheme  } from '@mui/material';
import Layout from '../providers/Layout';

const itemData = [
  {"img": './photos/photo_png/aurora.png', "title": "aurora"},
  {"img": './photos/photo_png/chiiwa.png', "title": "chiiwa"},
  {"img": './photos/photo_png/marry.png', "title": "marry"},
  {"img": './photos/photo_png/milkyway.png', "title": "milkyway"},
  {"img": './photos/photo_png/milkywayup.png', "title": "milkywayup"},
  {"img": './photos/photo_png/sparrow.png', "title": "sparrow"},
  {"img": './photos/photo_png/valensole1.png', "title": "valensole1"},
  {"img": './photos/photo_png/valensole2.png', "title": "valensole2"},
  {"img": './photos/photo_png/bee1.png', "title": "bee1"},
  {"img": './photos/photo_png/bee2.png', "title": "bee2"},
  {"img": './photos/photo_png/bird.png', "title": "bird"},
  {"img": './photos/photo_png/flower1.png', "title": "flower1"},
  {"img": './photos/photo_png/mtf.png', "title": "mtf"},
];

const Photography = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm')); 
  const matchesSM = useMediaQuery(theme.breakpoints.between('sm', 'md')); 
  const matchesMD = useMediaQuery(theme.breakpoints.up('md')); 

  const handleOpen = (imgSrc) => {
    setOpen(true);
    setSelectedImg(imgSrc);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const getCols = () => {
    if (matchesXS) return 2;
    if (matchesSM) return 3;
    if (matchesMD) return 4;
  };

  return (
    <>
      <Layout title="Photography">
        <Card sx={{ minWidth: 275, mt: 3, minHeight: 500 }} elevation={8}> 
          <CardContent>
            <ImageList variant="masonry" cols={getCols()}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} onClick={() => handleOpen(item.img)}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Dialog open={open} onClose={handleClose}>
              <img src={selectedImg} alt="Selected" style={{ width: '100%' }} />
            </Dialog>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
};

export default Photography;