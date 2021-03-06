const User = require('../models/users');

module.exports.login = async (req, res) => {
  const user = await User.findByEmail(req.body.email, false);
  if (
    user &&
    (await User.verifyPassword(user.encrypted_password, req.body.password))
  ) {
    console.log(req.session);

    if (req.body.stayConnected) {
      req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000;
    }
    req.session.userId = user.id;

    req.session.save((err) => {
      if (err) return res.sendStatus(500);
      console.log(user.id);
      return res.status(200).json(user.id);
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
};
