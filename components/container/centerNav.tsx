const CenterNav = ({ children, maxWidth }: any) => { 
    return (
        <div style={{ maxHeight: '100vh', maxWidth: maxWidth, flex:1, overflowY:'scroll', overflowX:'hidden', display:'flex', flexDirection:'column', alignItems:'center', margin:0, justifyContent:'flex-start', border:'0.2px solid rgba(0,0,0,0.05)'}}>
            {children}
        </div>
    )
}

export default CenterNav;