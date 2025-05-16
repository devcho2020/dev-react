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
    backgroundColor: '#78350f',
    borderTop: '1px solid #f5e9da',
    padding: '2rem',
    color: '#FFF',
    fontWeight: 700,
    flex: 1,
    '@media': {
        'screen and (max-width: 768px)': {
            flex: 4,
            padding: '1rem',
        }
    }
});

export const mainWrapper = style({
    flex: 9
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
    }
});
