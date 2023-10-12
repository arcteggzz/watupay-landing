export interface activeContestsResponseType {
  id: string;
  name: string;
  description: string;
  short_description: string;
  status: string;
  sub_url: string;
  organized_name: string;
  organizer_email: string;
  organizer_phone_number: null | string;
  organizer_address: null | string;
  organizer_logo: string;
  created_at: string;
  start_date: string;
  end_date: string;
  start_date_human: string;
  end_date_human: string;
  ussd: {
    id: string;
    name: string;
    description: null | string;
    description_2: null | string;
    bank_ussd: string;
  }[];
  images: string[];
  banner: string;
}
