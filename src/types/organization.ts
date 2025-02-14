export type Rating = 'S' | 'A' | 'B' | 'C' | 'D' | 'E';

export interface Notification {
  id: string;
  title: string;
  text: string;
  read_at: string | null;
}

export interface OrganizationState {
  id: string;
  rating: Rating | null;
  name: string;
  notifications: Notification[];
}
