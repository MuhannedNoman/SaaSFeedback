import React from 'react';
import { Icon } from '@chakra-ui/react';

const Logo = (props) => {
  return (
    <Icon boxSize="16" {...props}>
      <path
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
      />
    </Icon>
  );
};

export default Logo;
