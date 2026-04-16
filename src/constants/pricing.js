const PRICING_TERMS = {
  ANNUALLY: "annually",
  MONTHLY: "monthly",
};

const PLANS = [
  {
    NAME: "basic",
    STORAGE: "500 GB",
    USERS_COUNT: 2,
    SEND_SIZE_LIMIT: "3 GB",
    [PRICING_TERMS.MONTHLY]: 19.99,
    [PRICING_TERMS.ANNUALLY]: 199.99,
    FEATURED: false,
  },

  {
    NAME: "professional",
    STORAGE: "1 TB",
    USERS_COUNT: 5,
    SEND_SIZE_LIMIT: "10 GB",
    [PRICING_TERMS.MONTHLY]: 24.99,
    [PRICING_TERMS.ANNUALLY]: 249.99,
    FEATURED: true,
  },

  {
    NAME: "master",
    STORAGE: "2 TB",
    USERS_COUNT: 10,
    SEND_SIZE_LIMIT: "20 GB",
    [PRICING_TERMS.MONTHLY]: 39.99,
    [PRICING_TERMS.ANNUALLY]: 399.99,
    FEATURED: false,
  },
];

export { PLANS, PRICING_TERMS };
