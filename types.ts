
export enum Tag {
  Free = 'Free',
  Paid = 'Paid',
  ForKids = 'For Kids',
  ForAllAges = 'For All Ages',
  AIPowered = 'AI-powered',
  Subscription = 'Subscription',
  Coding = 'Coding',
  Math = 'Math',
  Science = 'Science'
}

export interface Website {
  id: number;
  name: string;
  link: string;
  icon: string;
  description: string;
  features: string[];
  tags: Tag[];
}
