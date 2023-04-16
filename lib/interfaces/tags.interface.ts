export interface GetTags {
  page?: string;
  size?: string;
  title?: string;
}

export interface AddTag {
  name: string;
  description: string;
}

export interface UpdateTag {
  name?: string;
  description?: string;
}
