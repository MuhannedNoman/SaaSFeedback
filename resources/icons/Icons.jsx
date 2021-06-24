import React from 'react';
import { Icon } from '@chakra-ui/react';

export const Github = (props) => {
  return (
    <Icon boxSize="6" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </Icon>
  );
};

export const Google = (props) => {
  return (
    <Icon boxSize="6" {...props}>
      <svg viewBox="0 0 48 48">
        <defs>
          <path
            id="a"
            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
        </defs>
        <clipPath id="b">
          <use href="#a" overflow="visible" />
        </clipPath>
        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
        <path
          clipPath="url(#b)"
          fill="#EA4335"
          d="M0 11l17 13 7-6.1L48 14V0H0z"
        />
        <path
          clipPath="url(#b)"
          fill="#34A853"
          d="M0 37l30-23 7.9 1L48 0v48H0z"
        />
        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
      </svg>
    </Icon>
  );
};
