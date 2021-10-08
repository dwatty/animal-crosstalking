export interface ResidentDescription {
  animal: string;
  personality: string;
}

export interface Resident {
  id: number;
  name: string;
  avatar: string;
  description: ResidentDescription;
  notes: string[];
}
