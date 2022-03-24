import * as fs from 'fs';
import { Configuration } from './Configuration';

export const initalization = () => {
    createImageDir()
    createThumbnailDir()
}


const createImageDir = () => {
    if (!fs.existsSync(Configuration.imageDir)) {
        fs.mkdirSync(Configuration.imageDir,{recursive:true})
    }
}

const createThumbnailDir = () => {
    if (!fs.existsSync(Configuration.thumbnailDir)) {
        fs.mkdirSync(Configuration.thumbnailDir,{recursive:true})
    }
}