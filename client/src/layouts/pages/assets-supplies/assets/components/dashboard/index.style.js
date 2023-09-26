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