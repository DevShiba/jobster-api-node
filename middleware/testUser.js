const { BadRequestError } = require("../errors");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("You can't perform this action. Read only");
  }
  next();
};

module.exports = testUser;
