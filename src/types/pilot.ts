type PilotStatus = 'In Flight' | 'Actual' | 'Deleted';

export interface Pilot {
  id: string;
  name: string;
  phone: string;
  email: string;
  zip_code: string;
  description: string;
  status: PilotStatus;
  street_address: string;
  operator_number: string;
}

export interface PilotState {
  list: Pilot[];
}
