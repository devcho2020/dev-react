import { style, globalStyle } from "@vanilla-extract/css";

export const memoryGameWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '25rem',
    margin: '0 auto',
    '@media': {
        'screen and (max-width:768px)': {
            width: '18rem',
        }
    }
});

export const memoryGameHeader = style({
    height: '3rem',
    width: '100%'
});

export const memoryGameGraph = style({
    width: '100%',
    height: '2rem',
    margin: 'auto',
    border: '1px solid',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const memoryGameGraphTimer = style({
    position: 'absolute',
    color: '#78350f',
    fontWeight: 600,
});

export const memoryGameGraphGaugeWrapper = style({
    width: '100%',
    height: '100%',
});

export const memoryGameBodyWrapper = style({
    display: 'grid',    
    placeItems: 'center',
    gap: '2px',
    margin: 'auto', 
    width: '100%',
    height: '24em',
});

export const memoryGameCard = style({
    width: '90%',
    aspectRatio: '1', 
    backgroundColor: '#f5e9da',
    border: '3px solid #78350f',
    color: '#78350f',
    borderRadius: '6px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
});

export const memoryGameCardChoice = style({
    border: '3px solid #09D156',
});


export const memoryGameCardComplete = style({
    backgroundColor: '#09D156',
});

export const memoryGameGraphGauge = style({
    width: '100%',
    height: '100%',
    backgroundColor: '#f5e9da',
});

export const memoryGameFooter = style({
    height: '4rem',
    marginTop: '1rem'
});