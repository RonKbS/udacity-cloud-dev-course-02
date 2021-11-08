import AWS = require('aws-sdk');
import Jimp = require('jimp');



//Configure AWS
var credentials = new AWS.SharedIniFileCredentials({profile: process.env.AWS_PROFILE});
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: process.env.AWS_REGION,
  params: {Bucket: process.env.AWS_MEDIA_BUCKET}
});


export async function uploadImage( imgLoc: string, imgName: string ): string {
  const imgData = await Jimp.read(imgLoc);
  const imgUrl = await s3.upload({
    Bucket: 'bucket',
    Key: imgName,
    Body: imgData
  }, function(err, data) {
    if (err) {
      console.log(err, data);
    }
    return data
   });
   return imgUrl
} 

/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl( key: string ): string{

  const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject', {
        Bucket: process.env.AWS_MEDIA_BUCKET,
        Key: key,
        Expires: signedUrlExpireSeconds
      });

    return url;
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ){

    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('putObject', {
      Bucket: process.env.AWS_MEDIA_BUCKET,
      Key: key,
      Expires: signedUrlExpireSeconds
    });

    return url;
}
