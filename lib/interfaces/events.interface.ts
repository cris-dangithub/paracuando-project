export interface Event {
  id: string;
  title: string;
  description: string;
  reference_link: string;
}

export interface PublicationPostRequest extends Event {
  content: string;
  publication_type_id: number;
  tags: any[];
}

export interface EventCard extends PublicationPostRequest {
  images: any[];
  votes: number;
}
