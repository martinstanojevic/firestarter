export const authError = (err: Error) => {
  if (err) {
    console.log(err);
    throw err;
  }
};
