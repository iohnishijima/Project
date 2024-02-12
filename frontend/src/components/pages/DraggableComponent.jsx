import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

function DraggableComponent() {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        touchAction: 'none',
        background: 'salmon',
        width: 100,
        height: 100,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      Drag me
    </animated.div>
  );
}

export default DraggableComponent;
