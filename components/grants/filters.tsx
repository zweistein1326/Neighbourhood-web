import { Typography } from "@mui/material";

const GrantFilters = () => { 
    const searchFIelds = ['Location', 'Area of interest', 'Range', 'All Filters'];
    // TODO: Onclick area of work, show list of options of areas of work and have multi select
    // TODO: Show suggestive options for location
    return (
        <div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:20}}>
                {searchFIelds.map((field, index) => <div key={index} style={{ padding: '10px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}><Typography>{field}</Typography></div>)}
            </div>
        </div>
    )
}
export default GrantFilters;