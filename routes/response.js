exports.success = (req, res, message, status) => {
  console.log('****Success!!!!*****');
  res.status(status || 200).send({
    error: '',
    body: message,
  });
};

exports.error = (req, res, message, status, details) => {
  console.error('****Error!!!****  ' + details);
  res.status(status || 500).send({
    error: message,
    body: '',
  });
};