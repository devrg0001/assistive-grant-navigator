export interface Grant {
  id: string;
  title: string;
  description: string;
  category: 'housing' | 'education' | 'business' | 'transportation' | 'veteran' | 'personal';
  eligibilityCriteria: {
    maxIncome?: number;
    location?: string[];
    requirements: string[];
  };
  amount: string;
  applicationUrl: string;
  deadline: string;
}

export const grants: Grant[] = [
  {
    id: '1',
    title: 'NY State Seed Funding Grant Program',
    description: 'The New York State Seed Funding Grant Program provides assistance to early-stage small businesses to succeed in a recovering New York State economy.',
    category: 'business',
    eligibilityCriteria: {
      location: ['New York'],
      requirements: [
        'Business operational after September 1, 2018',
        'Must be a small business',
        'Must be located in New York State'
      ]
    },
    amount: '$200,000,000',
    applicationUrl: 'https://www.ny.gov/seedfunding',
    deadline: '2024-12-31'
  },
  {
    id: '2',
    title: 'NYS Education Department Grants',
    description: 'The New York State Education Department provides various grants aimed at supporting public school districts in improving educational outcomes, enhancing infrastructure, and addressing specific educational challenges.',
    category: 'education',
    eligibilityCriteria: {
      location: ['New York'],
      requirements: [
        'Must be a public school district',
        'Must demonstrate need for improvement',
        'Must have comprehensive support plan'
      ]
    },
    amount: 'Varies by program',
    applicationUrl: 'https://www.nysed.gov/funding-opportunities',
    deadline: '2024-08-15'
  },
  {
    id: '3',
    title: 'Veteran Housing Assistance Grant',
    description: 'Support for veterans seeking housing assistance and home modifications.',
    category: 'veteran',
    eligibilityCriteria: {
      requirements: [
        'Must be a veteran',
        'Honorable discharge',
        'Demonstrate housing need'
      ]
    },
    amount: 'Up to $50,000',
    applicationUrl: 'https://www.va.gov/housing-assistance',
    deadline: '2024-12-31'
  }
];