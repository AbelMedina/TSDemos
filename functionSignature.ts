type Run = (milles: number) => boolean;
let runner: Run = function (milles: number): boolean {
  if (milles > 10) {
    return true;
  }
  return false;
};

console.log(runner(9));
