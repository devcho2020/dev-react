import { style } from "@vanilla-extract/css"

export const rootWrapper = style({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
});

export const headerWrapper = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#78350f',
    height: '4rem',
    padding: '0 3rem',
    color: '#FFF',
    '@media': {
      'screen and (max-width: 768px)': {
        padding: '0 0.5rem',
      },
    },
})

export const bodyWrapper = style({
  display: "flex",
  height: '100%',
  flex: 1
});

export const leftSideWrapper = style({

    position: 'absolute',
    zIndex: '9999',
    height: 'calc(100% - 13rem)',
    width: '10rem',

    backgroundColor: '#78350f',
    borderTop: '1px solid #f5e9da',
    padding: '2rem',
    color: '#FFF',
    fontWeight: 700,
    '@media': {
        'screen and (max-width: 768px)': {
            width: '6rem',
            padding: '1rem',
            height: 'calc(100% - 10rem)',
        }
    }
});

export const mainWrapper = style({
    flex: 9,
    padding: '2.75rem 0 0 0'
});

export const footerWrapper = style({
    height: '3rem',
    backgroundColor: '#e5e7eb',
    padding: '1rem',
    display: 'grid',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 600,
    '@media': {
        'screen and (max-width: 768px)': {
            height: '2rem'
        }
    },    
});

const leftSideButtonStyle = {
    position:'absolute' as const,
    zIndex: '9999',
}

export const leftSideButton = style(leftSideButtonStyle);
export const leftSideButtonActive = style({
    ...leftSideButtonStyle,
    left: '14rem',
    '@media': {
        'screen and (max-width: 768px)': {
            left: '8rem',
        }
    }
});