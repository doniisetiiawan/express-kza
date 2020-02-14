const broadcast = (msg, timeout, callback) => {
  setTimeout(() => {
    console.log(msg);
    callback();
  }, timeout);
};

broadcast('Is there anybody out there?', 1000, () => {
  console.log('Message sent');
});
