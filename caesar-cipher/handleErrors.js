const HandleErrors = (err) => {
  if (err) {
    console.error('\x1b[30m\x1b[41m%s\x1b[0m', `ERROR: ${err.message}`);
    process.exit(-1);
  }
};

export { HandleErrors };
