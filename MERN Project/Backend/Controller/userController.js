const { getUsersById } = require("./authController");

const User = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUsersById(userId);
    console.log(user);
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>User Details</title>
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
                  font-size: 2rem;
                  margin-bottom: 20px;
                  color: #2c3e50;
              }
              .card-container {
                  display: flex;
                  justify-content: center;
              }
              .card {
                  background-color: #ecf0f1;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  width: auto;
                  text-align: left;
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
              .card strong {
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
                  margin-top: 20px;
              }
              button:hover {
                  background-color: #2980b9;
              }
          </style>
      </head>
      <body>
          <h1>Welcome, ${user.username}</h1>
          <h3>User Details</h3>
          <div class="card-container">
              <div class="card">
                  <p><strong>User Id:</strong> ${user._id}</p>
                  <p><strong>Username:</strong> ${user.username}</p>
                  <p><strong>Email:</strong> ${user.email}</p>
                  <p><strong>Phone Number:</strong> 0${user.phone}</p>
                  <p><strong>Joining Date:</strong> ${user.joiningDate.toLocaleDateString()}</p>
                  <p><strong>Administrator:</strong> ${user.isAdmin ? 'Yes' : 'No'}</p>
              </div>
          </div>
          <button onclick="window.location.href='/'">Go to Home Page</button>
      </body>
      </html>
    `);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while processing your request.");
  }
};

module.exports = User;
