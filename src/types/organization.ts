export type Rating = 'S' | 'A' | 'B' | 'C' | 'D' | 'E';

interface Notification {
  title: string;
  text: string;
  read_at: string | null;
}

export interface OrganizationState {
  rating: Rating | null;
  name: string;
  notifications: Notification[];
}
