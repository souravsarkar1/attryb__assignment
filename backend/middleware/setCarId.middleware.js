function setCarID(req, res, next) {
    const carID = req.headers.authorization?.split(' ')[1];
    if (!carID) {
      return res.status(400).json({ msg: 'Car not found' });
    }
  
    try {
      req.body.carID = carID;
      next();
    } catch (error) {
      res.status(400).json({ msg: 'Error setting car ID', error: error.message });
    }
  }
  
  module.exports = setCarID;
  