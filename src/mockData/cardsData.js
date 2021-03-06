export const cards = [
  // The Student Life credit card is only available to customers with an employment status of Student.
  {
    id: 'card-0',
    name: 'Student Life',
    apr: 18.9, // value in %
    btod: 0, // balance tranfer offer duration (in months)
    pod: 6, // purchase offer duration (in months)
    creditAvailable: 1200, // value in £
  },
  // The anywhere card is available to anyone anywhere.
  {
    id: 'card-1',
    name: 'Anywhere Card',
    apr: 33.9, // value in %
    btod: 0, // balance tranfer offer duration (in months)
    pod: 0, // purchase offer duration (in months)
    creditAvailable: 300, // value in £
  },
  // The Liquid card is a card available to customers who have an income of more than £16000.
  {
    id: 'card-2',
    name: 'Liquid Card',
    apr: 33.9, // value in %
    btod: 0, // balance tranfer offer duration (in months)
    pod: 6, // purchase offer duration (in months)
    creditAvailable: 3000, // value in £
  },
];
