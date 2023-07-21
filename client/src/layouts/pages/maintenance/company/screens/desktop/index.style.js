export const container = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100vh',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const content = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    padding: '100px 20px 20px 20px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const history = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '350px',
    padding: '190px 0 20px 0'
}

export const items = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexGrow: 1,
    overflow: 'hidden'
}

export const logs = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '15px',
    border: 'solid 1px #F1F6F9',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}