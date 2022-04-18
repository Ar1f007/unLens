export const splitErrorText = (msg) => {
  return msg
    .match(/\((.*)\)/)[1]
    .split('/')[1]
    .split('-')
    .join(' ');
};
