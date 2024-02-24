export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  askingSalary: number;
  location: string;
  aboutMe: string;
  skills: { skillId: string; userId: string }[];
}
