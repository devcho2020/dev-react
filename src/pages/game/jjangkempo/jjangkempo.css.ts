import { style, globalStyle } from "@vanilla-extract/css";
export const jjangkempoWrapper = style({
    height: '100%',
    width: '25rem',
    margin: '0 auto',
    '@media': {
        'screen and (max-width:768px)': {
            width: '18rem',
        }
    }
});

export const circleImageWrapper = style({
    width: '12rem',
    height: '12rem',
    borderRadius: '50%',
    border: '1px solid',    
    padding: '1rem',
    '@media': {
        'screen and (max-width:768px)': {
            width: '7rem',
            height: '7rem',
        }
    }
});

export const circleImage = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const circleWrapper = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    borderRadius: '50%',
    width: '25rem',
    height: '25rem',
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
    '@media': {
        'screen and (max-width:768px)': {
            width: '17rem',
            height: '17rem',
        }
    }
});

globalStyle(`${circleWrapper} div.circle`, {
    width: '4rem',
    height: '4rem',
    border: '3px solid #F70000',
    backgroundColor: '#1f1f1f',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontWeight: 'bold',
    borderStyle: 'dotted',
    '@media': {
        'screen and (max-width:768px)': {
            width: '3rem',
            height: '3rem',
        }
    }
})
globalStyle(`${circleWrapper} div.circle.selected`, {
    backgroundColor: '#09D156'
})

globalStyle(`${circleWrapper} div:nth-child(odd)`, {
    fontSize: '1.75rem',
})

globalStyle(`${circleWrapper} div:nth-child(even)`, {
    fontSize: '1.75rem',
})


export const choiceWrapper = style({
    display: 'flex',
    width: '100%',
    marginTop: '3rem',
    justifyContent: 'center',
    gap: '0.5rem'
});

export const choiceButton = style({
    borderRadius: '50%',
});

globalStyle(`${choiceButton} img`, {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})