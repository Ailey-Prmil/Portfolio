export type TimelineData = {
  startDate: string;
  endDate: string;
  title: string;
  organization: string;
  description: string[];
};

type Skill = {
  name: string;
  logo: string;
};

export type SkillsData = {
  technical: Skill[];
  business: Skill[];
  tools: Skill[];
};

export type CertificatesData = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
};
