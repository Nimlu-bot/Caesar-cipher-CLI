const HandleErrors = (err) => {
  if (err) {
    console.error(err);
    process.exitCode = -1;
  }
};

export { HandleErrors };
