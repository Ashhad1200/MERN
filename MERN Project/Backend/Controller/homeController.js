const { GetUsers, getUsersById } = require("./authController");

const Home = async (req, res) => {
  try {
    const allUsers = await GetUsers();
    // console.log(users);

    // const userById = await getUsersById(userId);
    // console.log(userById);

    // Send the HTML response with the user list
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page</title>
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
                h3 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    color: #2c3e50;
                }
                .card-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }
                .card {
                    background-color: #ecf0f1;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    width: auto;
                    text-align: center;
                    transition: transform 0.3s;
                }
                .card:hover {
                    transform: translateY(-10px);
                }
                .card p {
                    margin: 10px 0;
                    font-size: 1.2rem;
                    color: #333;
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
                    margin-top: 20px;
                }
                button:hover {
                    background-color: #2980b9;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to the Home Page</h1>
            <h3>User List</h3>
            <div class="card-container">
                ${allUsers
                  .map(
                    (user) =>
                `<div class="card" onclick="window.location.href='/user/${user._id}'">
                    <p><strong>User Name:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                </div>`
                  )
                  .join("")}
            </div>
            <button onclick="window.location.href='/about/aboutPage'">Go to About Page</button>
        </body>
        </html>
    `);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while processing your request.");
  }
};

module.exports = Home;
