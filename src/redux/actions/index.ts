const showDiv = (): object => {
  return {
    type: "SHOW",
  };
};

const hideDiv = (): object => {
  return {
    type: "HIDE",
  };
};

export { showDiv, hideDiv };
