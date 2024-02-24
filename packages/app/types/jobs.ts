export interface Job {
  id: string;
  title: string;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  salary?: number;
  isOpen: boolean;
  skills: { id: string; name: string }[];
  location: string;
}
