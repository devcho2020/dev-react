import { style, globalStyle } from "@vanilla-extract/css";

const linkStyle = {
  color: '#FFF',
  fontWeight: 700,
  ':hover': {
    backgroundColor: '#e4d3bb',   
    transition: 'background-color 0.2s ease-in-out'  
  }
}

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

export const link = style(linkStyle);

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