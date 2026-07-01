const {
    PutObjectCommand,
    ListObjectsV2Command
} = require("@aws-sdk/client-s3");

const s3Client = require("../config/s3");

exports.uploadFile = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "Please select a file"
            });

        }

        const command = new PutObjectCommand({

            Bucket: process.env.AWS_BUCKET_NAME,

            Key: Date.now() + "_" + req.file.originalname,

            Body: req.file.buffer,

            ContentType: req.file.mimetype

        });

        await s3Client.send(command);

        res.json({

            success: true,

            message: "File Uploaded"

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

exports.getFiles = async (req, res) => {

    try {

        const command = new ListObjectsV2Command({

            Bucket: process.env.AWS_BUCKET_NAME

        });

        const response = await s3Client.send(command);

        res.json(response.Contents || []);

    } catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};