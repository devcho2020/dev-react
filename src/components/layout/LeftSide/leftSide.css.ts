import { style, globalStyle } from "@vanilla-extract/css";

export const title = style({
    textAlign: 'center',
    borderBottom: '1px solid #f5e9da',
    marginBottom: '1rem',
});

export const menuWrapper = style({
    color: '#FFF',
    fontWeight: 700,
    fontSize: '1rem',
    '@media': {
        'screen and (max-width:768px)': {
            fontSize: '0.8rem'
        }
    }
});

globalStyle(`${menuWrapper} a`, {
    width: '100%',
    textDecoration: 'none',
})

export const link = style( {
    width: '100%',
    color: '#FFF',
    fontWeight: 700,
    borderRadius: '0.125rem',
    ':hover': {
      color: '#78350f',
      backgroundColor: '#e4d3bb',   
      transition: 'background-color 0.5s ease-in-out'  
    }
});

export const selectedLink = style({
    width: '100%',
    fontWeight: 700,
    borderRadius: '0.125rem',
    color: '#78350f',
    backgroundColor: '#e4d3bb',
});

export const linkWrapper = style({
    margin: '1rem 0',
});

export const subLinkWrapper = style({
    display: 'flex',
    whiteSpace: 'nowrap',
    ':before': {
      content: '├─',
      display: 'inline',
      paddingRight: '0.3rem',
    },
    selectors: {
      '&:last-child:before': {
        display: 'inline',
        content: '└─ ',
      }
    }
})