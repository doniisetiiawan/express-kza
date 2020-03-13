// const name = (exports.name = 'Packt');
// const secret = 'zoltan';
//
// exports.lower = (input) => input.toLowerCase();
// exports.upper = (input) => input.toUpperCase();
// exports.get_name = () => name;
// exports.get_secret = () => secret;

const secret = 'zoltan';

export default {
  name: 'Packt',
  lower(input) {
    return input.toLowerCase();
  },
  upper(input) {
    return input.toUpperCase();
  },
  get_name() {
    return this.name;
  },
  get_secret() {
    return secret;
  },
};
