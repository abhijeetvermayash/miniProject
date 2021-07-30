const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
  projectId: "homoeomedicare-935f2",
  keyFilename: "./firebase_credentials.json",
});

const bucket = storage.bucket("homoeomedicare-935f2.appspot.com");
exports.uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No Image File");
    }
    let ext = file.originalname.split(".");
    let fileName = `${ext[0]}_${Date.now()}.${ext[1]}`;
    let fileUpload = bucket.file(fileName);
    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });
    blobStream.on("error", (error) => {
      reject(error);
    });
    blobStream.on("finish", () => {
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURI(fileUpload.name)}?alt=media`;
      resolve(publicUrl);
    });
    blobStream.end(file.buffer);
  });
};
