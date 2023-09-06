export interface Mission {
  id: string;
  name: string;
  launchDate: string;
  crew: string[];
  description: string;
  state: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}
