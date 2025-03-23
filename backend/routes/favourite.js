const router = require("express").Router();
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

// add book to favourite
router.put("/add-book-to-favourite", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourite.includes(bookid);
        if (isBookFavourite) {
            return res.status(200).json({ message: "Book already added to favourite" });
        }
        await User.findByIdAndUpdate(id, { $push: { favourite: bookid } });
        return res.status(200).json({ message: "Book added to favourite successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
module.exports = router;