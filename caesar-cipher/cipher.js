const ENCODE = 'encode';
const cipher = (chunk, shift, action) => {
  if (action === ENCODE) return chunk.map((el) => el + 1);
  return chunk.map((el) => el - 1);
};
export { cipher };
