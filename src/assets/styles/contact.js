

export const useStyles = theme => ({
    TextField:{
        width:'500px',
        "@media (max-width:780px)": {
            width:"300px"
          }
    },
    textarea:{
        width:'478px',
        fontSize:'15px',
        border:'1px solid #C4C4C4',
        padding:'12px',
        "@media (max-width:780px)": {
            width:"275px"
          }

    },
    sendButton:{
        background: '#f86f2d',
    border: '1px solid #f86f2d',
    color: '#fff',
    '&:hover': {
        background: "black",
        border: '1px solid black',
     },
     "@media (max-width:780px)": {
      marginLeft:'20%'
      }
    },
 
});
