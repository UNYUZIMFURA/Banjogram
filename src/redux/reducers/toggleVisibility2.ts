const toggleVisibility2 = (state: boolean = false, action) => {
  switch (action.type as string) {
    case "SHOW":
      return true;
    case "HIDE":
      return false;
    default:
      return state;
  }
};

export { toggleVisibility2 };
