import bcrypt from 'bcrypt';
import {User} from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await User.create({
            firstName,
            lastName,
            email,
            hashPassword: hash,
            role,
        });

        const { hashPassword, ...userData } = user._doc;

        return res.status(201).json(userData);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isValid = await bcrypt.compare(password, user.hashPassword);

        if (!isValid) {
            return res
                .status(400)
                .json({ message: 'Invalid password or email' });
        }

        const { hashPassword, ...userData } = user._doc;

        return res.status(200).json(userData);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
};
