


const About = async (req, res) => {
    try {
        res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background-color: #f0f4f8;
                        color: #333;
                    }
                    h1 {
                        font-size: 2.5rem;
                        margin-bottom: 20px;
                        color: #2c3e50;
                    }
                    button {
                        padding: 15px 30px;
                        font-size: 1.2rem;
                        color: #fff;
                        background-color: #3498db;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    button:hover {
                        background-color: #2980b9;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to the About Page</h1>
                <button onclick="window.location.href='/'">Go to Home Page</button>
            </body>
            </html>
        `);
    } catch (error) {
        console.log(error);
        res.status(500).send('An error occurred while processing your request.');
    }
};

module.exports = About;
