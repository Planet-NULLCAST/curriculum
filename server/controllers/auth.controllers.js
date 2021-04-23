const config = require('../app/config/auth.config');
const db = require('../app/models');
const User = db.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    // Role.findOne({ name: "user" }, (err, role) => {
    //   if (err) {
    //     res.status(500).send({ message: err });
    //     return;
    //   }

    //   user.roles = [role._id];
    //   user.save(err => {
    //     if (err) {
    //       res.status(500).send({ message: err });
    //       return;
    //     }

    //     res.send({ message: "User was registered successfully!" });
    //   });
    // });
    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin = (req, res) => {
  console.log(req);
  User.findOne({
    username: req.body.username
  })
    .populate("role", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.send({ message: "User nor found!" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.send({
          accessToken: null,
          message: "Invalid Password"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400
      });
      res.status(200).send({
        id: user._id,
        fName: user.firstName,
        lName: user.lastName,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    });
};