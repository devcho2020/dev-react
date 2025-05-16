import { globalStyle } from '@vanilla-extract/css';

// body 초기화
globalStyle('body', {
  margin: 0,
  padding: 0,
  minWidth: '320px',
  boxSizing: 'border-box',
  fontFamily: 'sans-serif',
  height: '100vh',
  maxHeight: '100vh'
});