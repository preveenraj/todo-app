const User = require('../dbUsers');

// Import necessary modules and dependencies

// Login function
const signIn = async (req, res) => {
    const { user } = req.body;

    if (!user) {
        return res.status(400).json({ error: 'Invalid request' });
    }
    try {
        // Find the user by email
        let dbUser = await User.findOne({ email: user.email });

        // If user not found, create a new user
        if (!dbUser) {
            dbUser = await User.create({
                firebaseUserId: user.uid,
                name: user.displayName,
                email: user.email,
            });
        }
        // If login successful, return success message or user data
        return res.status(200).json({ message: 'Login successful', user: dbUser });
    } catch (error) {
        console.log("🚀 ~ signIn ~ error:", error)
        // Handle any errors that occur during login
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Logout function
const logout = (req, res) => {
    // Perform any necessary logout operations (e.g., clearing session data, etc.)

    // Return success message
    return res.status(200).json({ message: 'Logout successful' });
};

// Export the login and logout functions
module.exports = { signIn, logout };