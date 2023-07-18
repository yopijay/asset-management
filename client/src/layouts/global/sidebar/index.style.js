export const sidebar = { 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100vh',
    width: { lg: 280 }, 
    flexShrink: { xs: 0 } 
}

export const fix = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%',
    padding: '100px 12px 20px 12px'
}

export const swipe = {
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: 280,
        backgroundColor: '#FAFAFA',
        backdropFilter: 'blur(10px)',
        height: '100vh',
        '&::-webkit-scrollbar': { display: 'none' }
    }
}

export const account = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    padding: '15px 10px',
    borderRadius: '6px'
}

export const btn = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 17px',
    borderRadius: '7px',
    color: '#FFFFFF',
    backgroundColor: '#A0C49D',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#86a583' }
}

export const nav = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}