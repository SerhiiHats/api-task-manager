export const checkAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(404).json({message: "User not found"});
    }

    if (req.user.role !== 'admin') {
      return res.status(500).json({message: "User don't have permission"});
    }

    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({error: err.message});
  }
}