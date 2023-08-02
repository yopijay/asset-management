export const container = { height: '100vh' }

export const content = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    padding: '90px 0 20px 0',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const items = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexGrow: 1,
    overflow: 'hidden'
}

export const savebtn = {
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

export const cancelbtn = {
    textAlign: 'center',
    width: '150px',
    padding: '8px 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '7px',
    textDecoration: 'none',
    color: '#394867',
    backgroundColor: '#DDE6ED',
    '&:hover': { backgroundColor: '#cdd6dd' }
}

export const input = {
    MuiInput: {
        styleOverrides: {
            root: {
                '&:before': { borderBottom: 'none' },
                '&:after': { borderBottom: 'none' },
                '&.Mui-disabled:before': { borderBottom: 'none' },
                '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' }
            },
            input: { textTransform: 'uppercase', fontFamily: 'Montserrat' }
        }
    }
}

export const card = {
    backgroundColor: '#FFFFFF',
    borderRadius: '7px',
    flexGrow: 1,
    padding: {
        xs: '20px',
        sm: '30px',
        lg: '40px'
    },
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.4rem',
    color: '#394867',
}