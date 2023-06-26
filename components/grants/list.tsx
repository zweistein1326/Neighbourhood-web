import GrantTile from "./tile";

const GrantList = ({grants, selectGrant, selectedGrant}:any) => {
    return (
        <div style={{minWidth:'20vw', borderRight:'0.2px solid rgba(0,0,0,0.05)', padding:'0 12px'}}>
            {grants.map((grant: any, index: number) => {
                console.log(grant, selectedGrant)
                return (
                    <GrantTile grant={grant} isSelected={selectedGrant.id == grant.id} key={index} selectGrant={() => { selectGrant(grant) }} />
                )
            })}
        </div>
    )
}

export default GrantList;