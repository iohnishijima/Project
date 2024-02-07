import React from 'react'
import Header from '../Templates/Header';
// import { ImageList, ImageListItem } from '@mui/material';
// import aurora from '../../photos/photography/aurora.webp';
// import chiiwa from '../../photos/photography/chiiwa.webp';
// import marry from '../../photos/photography/marry.webp';
// import milkyway from '../../photos/photography/milkyway.webp';
// import milkywayup from '../../photos/photography/milkywayup.webp';
// import sparrow from '../../photos/photography/sparrow.webp';
// import valensole1 from '../../photos/photography/valensole1.webp';
// import valensole2 from '../../photos/photography/valensole2.webp';

const itemData = [
  // {"img": aurora, "title": "Aurora"},
  // {"img": chiiwa, "title": "Chiiwa"},
  // {"img": marry, "title": "marry"},
  // {"img": milkyway, "title": "milkyway"},
  // {"img": milkywayup, "title": "milkywayup"},
  // {"img": sparrow, "title": "sparrow"},
  // {"img": valensole1, "title": "valensole1"},
  // {"img": valensole2, "title": "valensole2"},
];

const Photography = () => {
  return (
    <>
      <Header title="Photography" />
      {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}> */}
      {/* <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </>
  )
}

export default Photography
