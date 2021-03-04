import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

const Screen: React.FC<HTMLAttributes<HTMLDivElement>> = props => {
  return <div className={cn('h-screen container mx-auto', props.className)}>{props.children}</div>;
};

export default Screen;
