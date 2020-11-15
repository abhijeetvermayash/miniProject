let express = require('express');
const app=express();

let router = express.Router();
let upload = require('./config/multer.config.js');
 
const awsWorker = require('./controller/signUp.js');
 
app.post('/api/file/upload', upload.single("file"), awsWorker.doUpload);
 
// module.exports = router;

app.listen(4000, () => {
    console.log("Server running at port 4000");
  });