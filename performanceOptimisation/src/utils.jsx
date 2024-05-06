 export const heavyTask = () => {
    let start = Date.now();
    while (Date.now() - start < 400) {
      continue;
    }
    return true;
  };
  