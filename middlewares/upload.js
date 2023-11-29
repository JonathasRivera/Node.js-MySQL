const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/upload');
    },
    filename: function(req, file, cb) {
        const ext = file.originalname.split('.').pop();
        const newName = Date.now() + '-' + Math.floor(Math.random() * 1000000) + '.' + ext;
        cb(null, newName)
    }
})

const upload = multer({storage:storage})

module.exports = upload;