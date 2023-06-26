import { Input, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import Container from "../../components/container";
import ImageIcon from '@mui/icons-material/Image';
import { CancelOutlined, Videocam } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Storage } from "config/firebase-storage";

const CreatePost = () => { 

    const [users, setUsers] = useState<any>([]);

    const router = useRouter();
    const [form, setForm] = useState<any>({
        user_id: '',
        description: '',
        assets: [],
        location: ''
    });

    const inputImageRef: any = useRef();
    const inputVideoRef: any = useRef();
    // const inputLinkRef = useRef();

    const submitPost = async (e:any) => {
        e?.preventDefault();
        const assets_uris = await uploadAssets(form.assets);
        let updated_assets = form.assets.map((asset: any, index: number)=>({
            type: asset.type,
            height: asset.height,
            width: asset.width,
            uri: assets_uris[index],
        }));
        console.log({user_id: form.user_id, description: form.description.trimEnd(), assets: updated_assets, location: form.location});
        const data = await fetch('http://localhost:8080/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user_id: form.user_id, description: form.description.trimEnd(), assets: updated_assets, location: form.location})
        })
        return data;
        // router.push('/feed');
    }

    const uploadAssets = async (assets: any[]) => {
        let promises = assets.map(async(asset)=>{
            if(asset.type == 'video') { 
                const video_uri = await Storage.Video.uploadVideo(asset.uri, form.user_id);
                return video_uri;
            } else if (asset.type == 'image') {
                const image_uri = await Storage.Image.uploadImage(asset.uri, form.user_id);
                return image_uri;
            } else {
                console.log('Invalid asset type')
            }
        });
        return Promise.all(promises);
    }

    const removeAsset = (assetIndex: number) => {
        let new_assets = [];
        for (let index = 0; index < form.assets.length; index++) {
            const asset = form.assets[index];
            if (index == assetIndex) {
                // Do nothing
            }
            else {
                new_assets.push(asset);
            }
        }
        console.log(new_assets)
        setForm({...form, assets:new_assets})
    }

    useEffect(() => {
        fetch('http://localhost:8080/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res: any) => {
            return res.json()
        }).then(res => {
            setUsers(res.data);
        })
    }, [])

    
    return (
        <Container>
            <div style={{padding:'40px 40px', height:'4000px', width:'100%', paddingBottom:80}}>
                <h1>Create a Post</h1>
                <div style={{background:'#D9D9D9', width:'100%', padding:'20px 40px', display:'flex', flexDirection:'column'}}>
                    <div className="caption-input" style={{ width: '100%' }}>
                        <Select value={form.user_id} onChange={(e) => {
                            setForm({...form, user_id: e.target.value});
                        }}>
                            {users.map((user: any) => <MenuItem key={user._id} value={user._id}>{user._id} {user.fullname}</MenuItem>)}
                        </Select>
                    </div>
                    <div className="caption-input" style={{ width: '100%' }}>
                        <Input multiline rows={5} placeholder="What's new?" type={'text'} style={{ width: '100%' }} onChange={(e) => {setForm({...form, description: e.target.value})}} />
                    </div>
                    <AssetsPreview assets={form.assets} removeAsset={removeAsset} />
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <div className="auxillary-input" style={{display:'flex', flexDirection:'row'}}>
                            <div style={{marginRight: '12px'}}>
                                <input type="file" multiple accept="image/*" placeholder="Images" style={{ marginTop: 12, width: 0 }} ref={inputImageRef} onChange={ async (e) => {
                                    if (e.target.files) {
                                        const files: any = e.target.files;
                                        let files_urls: any[] = []
                                        for (let index = 0; index < files.length; index++) {
                                            const file = files[index];
                                            console.log(file);
                                            const image_url = URL.createObjectURL(file);
                                            var img = document.createElement("img");
                                            img.src = image_url;
                                            img.onload = await async function () {
                                                console.log({height: img.height, width: img.width, uri: img.src, type: 'image'});
                                                setForm({...form, assets: [...form.assets, {height: img.height, width: img.width, uri: img.src, type: 'image'}]});
                                            };
                                        }
                                    }
                                }}/>
                                <ImageIcon onClick={() => {
                                    inputImageRef.current?.click();
                                }} fontSize={'medium'}/>
                            </div>
                            <div style={{marginRight: '12px'}}>
                                <input type="file" multiple accept="image/*" placeholder="Images" style={{ marginTop: 12, width: 0 }} ref={inputVideoRef} onChange={(e) => {
                                    if (e.target.files) {
                                        const files: any = e.target.files;
                                        let files_urls = []
                                        for (let index = 0; index < files.length; index++) {
                                            const file = files[index];
                                            files_urls.push({uri: URL.createObjectURL(file)})
                                        }
                                        setForm({...form, assets: [...form.assets, ...files_urls]})
                                    }
                                }}/>
                                <Videocam onClick={() => {
                                    inputVideoRef.current?.click();
                                }} fontSize={'medium'}/>
                            </div>
                        </div>
                        <div className="action-buttons" style={{display:'flex', flexDirection:'row', alignItems:'flex-end', width:'100%', justifyContent:'flex-end', height:'100%'}}>
                            <p style={{padding:'10px 20px'}}>Draft</p>
                            <p style={{padding:'10px 20px', cursor:'pointer'}} onClick={submitPost}>Post</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const AssetsPreview = ({ assets, removeAsset }: any) => {
    
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        let new_assets = [];
        for (let index = 0; index < assets.length/2; index++) {
            const asset = assets[index];
            new_assets.push(asset);
        }
    },[assets])

    return (
        <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column' }}>
            <div style={{display:'flex', flexDirection:'row', marginTop:'4px'}}>
                {
                    assets.map((asset: any, index: number) => <AssetTile key={index} asset={asset} removeAsset={() => { removeAsset(index) }} />) 
                }
            </div>
        </div>)
}

const AssetTile = ({ asset, removeAsset }: any) => {
    return <div style={{position:'relative', height:'200px', marginRight:4}}>
        <CancelOutlined style={{position:'absolute', top:10, right:10, color:'white'}} onClick={removeAsset} />
        <img src={asset.uri} style={{ height: '200px', borderRadius: '8px'}} />
    </div>
}
export default CreatePost;