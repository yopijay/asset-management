export const container = {
    boxShadow: 'none',
    padding: '7px 0',
    maxHeight: '120px',
    overflow: 'hidden',
    backgroundColor: '#F1F6F9F2',
    backgroundFilter: 'blur(2px)',
}

export const menu = { 
    transition: 'transform 0.2s', 
    '&:hover': { transform: 'scale(1.1)' }, 
    display: { xs: 'block', lg: 'none' } 
}

export const title = {
    color: '#394867',
    fontFamily: 'Montserrat Black',
    fontSize: '1.5rem',
    lineHeight: 1,
    display: { xs: 'none', sm: 'block' }
}

export const subtitle = {
    color: '#9BA4B5',
    fontWeight: 'bold',
    display: { xs: 'none', sm: 'block' }
}