const db = require("../config/db");

exports.saveMessage = async (req, res) => {
    try {

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message is required"
            });
        }

        const sql = `
            INSERT INTO messages(message)
            VALUES(?)
        `;

        await db.execute(sql, [message]);

        res.status(201).json({
            success: true,
            message: "Saved Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.getMessages = async (req, res) => {

    try {

        const sql = `
            SELECT *
            FROM messages
            ORDER BY id DESC
        `;

        const [rows] = await db.execute(sql);

        res.json(rows);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};