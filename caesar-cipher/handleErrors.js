const HandleErrors = (err) => {
  if (err) {
    console.log('priver');

    console.error(`${err.message}`);
    process.exit(-1);
  }
};

export { HandleErrors };
