const AttachmentTile = ({ assets }: any) => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row' }}>
            {assets.map((asset: any, index: number) => {
                return (
                    <div key={index}>
                        <img src={asset.uri} style={{ maxWidth: '240px', height:'180px', margin: 12 }} />
                    </div>
                )
            })}
        </div>
    )
}

export default AttachmentTile;