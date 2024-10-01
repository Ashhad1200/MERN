const Home = async (req, res) => {
    try {
        res.status(200).send(`
            <h1>Welcome to the Home page</h1>
            <button onclick="window.location.href='/auth/login'">Go to loginpage Page</button>
        `);
    } catch (error) {
        console.log(error);
    }
};

module.exports = Home;
