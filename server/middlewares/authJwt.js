const jwt = require('jsonwebtoken');
const config = require('../app/config/auth.config');
const db = require('../app/models');
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }

  jwt.verify(token, config.secret, (err, decode) => {
    if(err){
      return res.status(401).send({ message: "unautherized!" });
    }
    req.userId = decode.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if(err){
      res.status(500).send({ message: err});
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if(err){
          res.status(500).send({ message: err});
          return;
        }

        for(let i = 0; i < roles.length; i++){
          if(roles[i].name === 'admin'){
            next();
            return;
          }
        }

        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if(err){
      res.status(500).send({ message: err});
      return;
    }
    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if(err){
          res.status(500).send({ message: err });
          return;
        }

        for(let i = 0; i < roles.length; i++) {
          if(roles[i].name === 'moderator') {
            next();
            return;
          }
        }

        res.status(403).send({ message: "Require moderator role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};

module.exports = authJwt;