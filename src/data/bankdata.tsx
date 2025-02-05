type Banks = {
  [bank: string]: {
    [city: string]: string[];
  };
};

export const banks: Banks = {
  HBL: {
    Lahore: ["Branch 1", "Branch 2"],
    Faisalabad: ["Branch 1", "Branch 2"],
    Multan: ["Branch 1", "Branch 2"],
  },
  ABL: {
    Lahore: ["Branch 1", "Branch 2"],
    Faisalabad: ["Branch 1", "Branch 2"],
    Multan: ["Branch 1", "Branch 2"],
  },
  Meezan: {
    Lahore: ["Branch 1", "Branch 2"],
    Faisalabad: ["Branch 1", "Branch 2"],
    Multan: ["Branch 1", "Branch 2"],
  },
  BoP: {
    Lahore: ["Branch 1", "Branch 2"],
    Faisalabad: ["Branch 1", "Branch 2"],
    Multan: ["Branch 1", "Branch 2"],
  },
};
