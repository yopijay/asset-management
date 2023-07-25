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

export const save = {
    textAlign: 'center',
    width: '150px',
    color: '#FFFFFF',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#A0C49D',
    padding: '8px 0',
    borderRadius: '7px',
    '&:hover': { backgroundColor: '#86a583' }
}

export const cancel = {
    textAlign: 'center',
    width: '150px',
    padding: '8px 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '7px',
    backgroundColor: '#DDE6ED',
    textDecoration: 'none',
    color: '#394867',
    '&:hover': { backgroundColor: '#cdd6dd' }
}