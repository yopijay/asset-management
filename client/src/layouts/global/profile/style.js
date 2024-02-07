export const content = {
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.17rem',
    color: '#636e72',
}

export const subtitle = {
    fontSize: '120%',
    fontFamily: 'Montserrat SemiBold',
    color: '#b2bec3'
}

export const btn = {
    fontSize: '85%',
    padding: '8px 20px',
    backgroundColor: '#dfe4ea',
    borderRadius: '8px',
    '&:hover': { transform: 'scale(1.06)' },
    transition: 'all 0.2s ease-in-out'
}

export const input = {
    border: 'solid 1px #dfe6e9',
    padding: {
        xs: '6px 8px',
        md: '8px 10px'
    },
    borderRadius: '6px'
}

export const dropdown = {
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

export const select = {
    width: '100%',
    border: 'solid 1px #dfe6e9',
    padding: {
        xs: '12px 8px 9px 8px',
        md: '9px 10px 6px 10px'
    },
    marginBottom: '5px',
    borderRadius: '5px',
    transition: 'all 0.2s ease-in-out'
}

export const lbl = {
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis', 
    width: '100%',
    padding: '2px 0',
    transition: 'all 0.2s ease-in-out'
}

export const textarea = {
    border: 'solid 1px #dfe6e9',
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontSize: '105%',
    padding: '10px',
    outline: 'none',
    textTransform: 'uppercase',
    color: '#353b48',
    backgroundColor: 'transparent',
    transition: 'all 0.2s ease-in-out'
}

export const savebtn = {
    textAlign: 'center',
    width: '150px',
    color: '#f5f6fa',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#40739e91',
    padding: '8px 0',
    borderRadius: '8px',
    '&:hover': { backgroundColor: '#487eb091' }
}

export const card = {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    flexGrow: 1,
    padding: {
        xs: '20px',
        sm: '30px',
        lg: '40px'
    },
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}