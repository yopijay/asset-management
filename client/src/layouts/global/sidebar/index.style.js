export const sidebar = { 
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100vh',
    width: { lg: 280 }
}

export const nav = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%',
    overflow: 'hidden'
}

export const fix = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%',
    padding: '100px 0 20px 0',
    display: { xs: 'none', lg: 'flex' }
}

export const accountfix = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    padding: '15px 10px',
    borderRadius: '6px'
}

export const navfix = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const swipe = {
    display: { lg: 'none' },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: 280,
        padding: '30px 15px 10px 15px',
        backgroundColor: '#FAFAFA',
        backdropFilter: 'blur(10px)',
        '&::-webkit-scrollbar': { display: 'none' }
    }
}

export const accountswipe = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '15px 10px',
    borderRadius: '6px'
}

export const navswipe = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const swipable = {
    flexDireciton: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%'
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
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#86a583' }
}