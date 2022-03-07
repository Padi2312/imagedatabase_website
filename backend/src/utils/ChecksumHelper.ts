import * as crypto from 'crypto'


export class ChecksumHelper {

    static generateChecksum(str) {
        return crypto
            .createHash('md5')
            .update(str, 'utf8')
            .digest('hex');
    }
}