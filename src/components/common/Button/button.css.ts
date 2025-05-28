import { style } from "@vanilla-extract/css";

export const button = style({
  backgroundColor: '#f5e9da',       
  color: '#78350f',                 
  border: '2px solid #78350f',
  padding: '0.3rem 0.6rem',
  borderRadius: '0.375rem',        
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    backgroundColor: '#e4d3bb',     
  },
  ':active': {
    transform: 'scale(0.98)',
  },
  selectors: {
    '&:disabled' : {
      backgroundColor: '#e5e7eb',
      cursor: 'not-allowed',
      color: '#1f1f1f'
    }
  }
});