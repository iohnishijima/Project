import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, CardContent, Typography, Button } from '@mui/material';

const AnimatedCard = animated(Card); // React Springでアニメーションを適用するCardコンポーネント

function CardComponent() {
  const [resetAnimation, setResetAnimation] = React.useState(false);

  const fadeIn = useSpring({
    reset: resetAnimation,
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {duration: 1000},
    onRest: () => setResetAnimation(false), // アニメーションが終了したらリセット状態を解除
  });

  return (
    <div>
      <AnimatedCard style={fadeIn}>
        <CardContent>
          <Typography variant="h5" component="h2">
            MUIとReact Spring
          </Typography>
          <Typography variant="body2" component="p">
            フェードインアニメーションを適用したカードの例です。
          </Typography>
        </CardContent>
      </AnimatedCard>
      <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={() => setResetAnimation(true)}>
        アニメーションを再開
      </Button>
    </div>
  );
}

export default CardComponent;
