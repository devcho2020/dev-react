import { style, globalStyle } from '@vanilla-extract/css'

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

export const logoBox = style({
    width: '3rem',
    height: '3rem',
    
});

globalStyle(`${logoBox} img`, {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
})

export const title = style({
    fontWeight: '700'
});

export const statusBox = style({
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'row',
    '@media': {
      'screen and (max-width: 768px)': {
        gap: '0rem',
        flexDirection: 'column',
      }
    }
});


const flexBetween = {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    justifyContent: 'space-between',
}
export const coinInfoBox = style(flexBetween);
export const chargeBox = style(flexBetween);

