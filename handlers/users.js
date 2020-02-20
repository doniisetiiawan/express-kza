exports.index = (req, res) => {
  res.send('index of users');
};

exports.new = (req, res) => {
  res.send('form for new user');
};

exports.create = (req, res) => {
  res.send('handle form for new user');
};

exports.show = (req, res) => {
  res.send(`show user ${req.params.user}`);
};

exports.edit = (req, res) => {
  res.send(`form to edit user ${req.params.user}`);
};

exports.update = (req, res) => {
  res.send(`handle form to edit user ${req.params.user}`);
};

exports.destroy = (req, res) => {
  res.send(`delete user ${req.params.user}`);
};
