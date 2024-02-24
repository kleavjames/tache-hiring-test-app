export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  askingSalary: number | null;
  location: string;
  aboutMe: string;
  skills: { id: string; name: string }[];
}
