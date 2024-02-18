export interface Job {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  salary?: string;
  isOpen: boolean;
  skills: any[]; // TODO:
  location: string;
  client?: any; // TODO:
  clientId?: string; // TODO:
}

export interface JobList extends Job {
  expand: boolean;
}
