export interface Status {
  guidelines: string;
  figma: string;
  storybook: string;
  cdn: string;
}

export interface Component {
  id: number;
  name: string;
  description: string;
  category: string;
  comment: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  statuses: Status[];
  storybookLink: string;
  figmaLink: string;
}
