import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Dialog,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import Layout from "../providers/Layout";
import { useSpring, animated } from "react-spring";

const itemData = [
  { img: "./photos/photo_png/aurora.png", title: "aurora" },
  { img: "./photos/photo_png/chiiwa.png", title: "chiiwa" },
  { img: "./photos/photo_png/marry.png", title: "marry" },
  { img: "./photos/photo_png/milkyway.png", title: "milkyway" },
  { img: "./photos/photo_png/milkywayup.png", title: "milkywayup" },
  { img: "./photos/photo_png/sparrow.png", title: "sparrow" },
  { img: "./photos/photo_png/valensole1.png", title: "valensole1" },
  { img: "./photos/photo_png/valensole2.png", title: "valensole2" },
  { img: "./photos/photo_png/bee1.png", title: "bee1" },
  { img: "./photos/photo_png/bee2.png", title: "bee2" },
  { img: "./photos/photo_png/bird.png", title: "bird" },
  { img: "./photos/photo_png/flower1.png", title: "flower1" },
  { img: "./photos/photo_png/mtf.png", title: "mtf" },
];

const ImageItem = ({ item, handleOpen }) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const matchesMD = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const matchesLG = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  // ここで動的にスタイルを調整
  const itemStyle = {
    width: matchesXS ? '100%' : matchesSM ? '50%' : matchesMD ? '33.33%' : matchesLG ? '25%' : '20%',
    height: 180, // 高さは固定で設定していますが、必要に応じて調整してください
    overflow: "hidden",
    cursor: "pointer",
  };
  const [hoverProps, setHover] = useSpring(() => ({
    scale: 1,
    brightness: 100,
    config: { mass: 1, tension: 210, friction: 20 },
  }));

  return (
    <Grid item xs={6} sm={4} md={3} lg={2} xl={1} style={itemStyle}>
      <ImageListItem
        key={item.img}
        onClick={() => handleOpen(item.img)}
        style={{ width: 240, height: 180, overflow: "hidden" }}
      >
        <animated.img
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
          onMouseEnter={() => setHover({ scale: 1.1, brightness: 120 })}
          onMouseLeave={() => setHover({ scale: 1, brightness: 100 })}
          style={{
            transform: hoverProps.scale.to((scale) => `scale(${scale})`),
            filter: hoverProps.brightness.to((brightness) => `brightness(${brightness}%)`),
            width: "100%", // 画像をコンテナにフィットさせます
            height: "100%", // 画像の高さをコンテナの高さに合わせます
            objectFit: "cover", // コンテナに合わせて画像を切り抜き、アスペクト比を維持します
            objectPosition: "center", // 画像を中央に配置します
          }}
        />
      </ImageListItem>
    </Grid>
  );
};

const Photography = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const theme = useTheme();

  const handleOpen = (imgSrc) => {
    setOpen(true);
    setSelectedImg(imgSrc);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ダイアログのアニメーション設定
  const dialogAnimation = useSpring({
    config: { duration: 150 },
    opacity: open ? 1 : 0,
    transform: open ? `scale(1)` : `scale(0.9)`,
  });

  return (
    <>
      <Layout title="Photography">
        <Card sx={{ minWidth: 275, mt: 3, minHeight: 500 }} elevation={8}>
          <CardContent>
            <Grid container spacing={2}>
              {itemData.map((item) => (
                <ImageItem key={item.img} item={item} handleOpen={handleOpen} />
              ))}
            </Grid>
            <Dialog open={open} onClose={handleClose}>
              <animated.div style={dialogAnimation}>
                {/* <img src={selectedImg} alt="Selected" style={{ width: "100%", height: "auto" }} /> */}
                <img src={selectedImg} alt="Selected" style={{ width: "auto", height: "auto" }} />
              </animated.div>
            </Dialog>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
};

export default Photography;
