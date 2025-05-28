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

globalStyle(`${circleWrapper} .win`, {
    backgroundColor: '#09D156',
})

globalStyle(`${circleWrapper} .lose`, {
    backgroundColor: '#FF0000',
})

globalStyle(`${circleWrapper} .draw`, {
    backgroundColor: '#EFFF23'
})

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
    marginTop: '1rem',
    justifyContent: 'center',
    gap: '0.5rem'
});

export const choiceButton = style({
    borderRadius: '50%',
});

export const choicePickButton = style({
    borderRadius: '50%',
    backgroundColor: '#09D156',
    selectors: {
        '&:disabled' : {
            backgroundColor: '#09D156',
        }
    }
});

export const choiceButtonImage = style({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
});

export const resultWrapper = style({
    marginTop: '1rem',
    height: '8rem',  
    display: 'flex',
    flexDirection: 'column'  
});

export const resultHeadRow = style({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '700',
    borderBottom: '1px solid'
});

export const resultBodyWrapper = style({
    overflowY: 'scroll'
});

export const resultBodyRow = style({
    display: 'flex',
    justifyContent: 'space-between',
});

globalStyle(`${resultBodyRow} div, ${resultHeadRow} div`, {
    flex: 1
})