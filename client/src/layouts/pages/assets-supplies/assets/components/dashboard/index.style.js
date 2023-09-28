export const content = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    height: '100vh',
    padding: {
        xs: '80px 0 20px 0',
        sm: '90px 0 20px 0',
        lg: '100px 20px 20px 20px'
    },
    overflow: 'hidden'
}

export const items = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    overflowY: 'scroll',
    height: '100%',
    paddingBottom: '70px',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const card = { 
    direction: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#ffffff', 
    width: '100%', 
    height: '100%',
    textDecoration: 'none',
    color: 'inherit',
    padding: '12px 17px', 
    borderRadius: '7px',
    '&:hover': {
        transform: 'scale(1.02)',
        transition: 'all 0.2s ease-in-out'
    },
    transition: 'all 0.2s ease-in-out'
}

export const countcard = {
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: '8px',
    padding: '20px 0'
}