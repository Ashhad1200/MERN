const Login = async(req , res) => {
    try {
        res.status(200).send("Welcome to the login page")
    } catch (error) {
        console.log(error)
    }
}

const Registration = async(req , res) => {
    try {
        res.status(200).send("Welcome to the Registration page")
    } catch (error) {
        console.log(error)
    }
}


module.exports = {Login, Registration};