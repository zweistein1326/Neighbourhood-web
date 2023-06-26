import {storage} from './firebase';
import { getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import { uuidv4 } from "@firebase/util";

export namespace Storage {

    export namespace Video { 
        export const uploadVideo = async (uri: string, user_id: string) => {
            let blob = await fetch(uri).then(res => {
                return res.blob();
            });
            let video_id = uuidv4(); 
            let video_path = `video_${user_id}_${video_id}/`
            const videoseRef = ref(storage, video_path);
            try {
                await uploadBytesResumable(videoseRef, blob, {
                    contentType: 'video/mp4',
                }).then((_) => {
                    console.log('Uploaded a file or blob!');
                });
                let video_uri = await getVideoLink(video_path);
                return video_uri;
            } catch(e: any) {
                console.log(e);
            }
        }

        const getVideoLink = (video_path: string) => {
            const storageRef = ref(storage, video_path);
            return getDownloadURL(storageRef);
        }
    }

    export namespace Image {
        export const uploadImage = async (uri: string, user_id: string) => {
            let blob = await fetch(uri).then(res => {
                return res.blob();
            });
            let image_id = uuidv4(); 
            const imageRef = ref(storage, `image_${image_id}/`);   
            await uploadBytesResumable(imageRef, blob).then((snapshot) => {
                console.log('Uploaded a file or blob!');
            });
            let image_path = `image_${image_id}/`
            let image_uri = await getImageLink(image_path);
            return image_uri;
        }

        const getImageLink = (image_path: string) => {
            const storageRef = ref(storage, image_path);
            try {
                let download_url = getDownloadURL(storageRef);
                return download_url;
            } catch (e:any) {
                if(e.code === 'storage/object-not-found' || e.code === 'storage/invalid-root-operation') {
                    console.log('No such image!');
                }
                return null;
            }
        }
    }
}