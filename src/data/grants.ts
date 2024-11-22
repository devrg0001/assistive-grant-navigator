export interface Grant {
  id: string;
  title: string;
  description: string;
  category: 'housing' | 'education' | 'business' | 'transportation';
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
    title: 'First-Time Homebuyer Assistance',
    description: 'Financial assistance for first-time homebuyers with low to moderate income.',
    category: 'housing',
    eligibilityCriteria: {
      maxIncome: 80000,
      location: ['California'],
      requirements: ['First-time homebuyer', 'Credit score above 620', 'Income verification required']
    },
    amount: 'Up to $25,000',
    applicationUrl: 'https://www.hud.gov/topics/grants',
    deadline: '2024-12-31'
  },
  {
    id: '2',
    title: 'Small Business Innovation Grant',
    description: 'Support for small businesses developing innovative solutions.',
    category: 'business',
    eligibilityCriteria: {
      maxIncome: 150000,
      requirements: ['Registered business', 'Less than 50 employees', 'Innovation focus']
    },
    amount: '$50,000 - $150,000',
    applicationUrl: 'https://www.grants.gov/web/grants',
    deadline: '2024-09-30'
  },
  {
    id: '3',
    title: 'Educational Development Fund',
    description: 'Grants for continuing education and professional development.',
    category: 'education',
    eligibilityCriteria: {
      maxIncome: 60000,
      requirements: ['High school diploma', 'US citizen', 'Enrollment in accredited institution']
    },
    amount: 'Up to $10,000',
    applicationUrl: 'https://studentaid.gov/understand-aid/types/grants',
    deadline: '2024-08-15'
  }
];