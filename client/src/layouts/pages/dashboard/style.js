export const panel = {
    backgroundColor: '#FFFFFF',
    height: '100%',
    padding: {
        xs: '20px',
        sm: '28px',
        lg: '52px'
    },
    borderRadius: '8px',
}

export const title = {
    color: '#636e72',
    fontSize: {
        xs: '115%',
        md: '120%',
        lg: '130%'
    },
    fontFamily: 'Montserrat ExtraBold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}

export const subtitle = {
    color: '#9BA4B5',
    fontFamily: 'Montserrat ExtraBold',
    fontSize: {
        xs: '130%',
        md: '140%',
        lg: '160%'
    },
}

export const stockcontainer = {
    overflowX: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const category = {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    minWidth: {
        xs: '80%',
        sm: '300px'
    },
    borderRadius: '8px'
}

export const ctgy = {
    color: '#636e72',
    fontSize: '110%',
    fontFamily: 'Montserrat ExtraBold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}

export const qty = {
    color: '#61677A',
    fontWeight: 'bold',
    fontSize: '117%'
}

export const label = {
    color: '#9BA4B5',
    fontFamily: 'Montserrat ExtraBold',
    fontSize: '120%'
}

export const bars = percentage => ({
    backgroundColor: '#2980b991',
    width: percentage,
    padding: '8px'
})