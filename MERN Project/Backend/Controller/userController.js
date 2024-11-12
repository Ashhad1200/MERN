
const User = async (req, res) => {
    res.json(req.user);
};

module.exports = User;
