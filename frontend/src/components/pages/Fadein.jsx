import React from 'react';
import { useSpring, animated } from 'react-spring';

function FadeInComponent() {
  const fadeIn = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return <animated.div style={fadeIn}>こんにちは、React Spring!</animated.div>;
}

export default FadeInComponent;
