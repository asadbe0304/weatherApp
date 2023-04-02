export const Reducer = (state:State, action:Action):State => {
  switch (action.type) {
    case "weather":
      return {
        ...state,
        open: false,
      };
  }
};
