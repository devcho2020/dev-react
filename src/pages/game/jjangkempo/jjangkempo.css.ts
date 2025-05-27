import { style, globalStyle } from "@vanilla-extract/css";
export const jjangkempoWrapper = style({
    height: '100%'
});

export const circleWrapper = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    borderRadius: '50%',
    width: '22rem',
    height: '22rem',
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
});

globalStyle(`${circleWrapper} div`, {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: '#78350f',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontWeight: 'bold',
})