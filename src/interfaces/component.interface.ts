export interface IStatusApi {
  guidelines: string;
  figma: string;
  storybook: string;
  cdn: string;
}

export interface IComponentApi {
  id: number;
  name: string;
  statuses: IStatusApi[];
  comment: string;
  description?: string | undefined;
  category: string;
  createdAt: string;
  updatedAt: string;
  figmaLink?: string;
  storybookLink?: string;
  image?: string;
}

export interface ICategoryApi {
  category: string;
  components: IComponentApi[];
}

export interface IComponentForm {
  id?: number;
  name: string;
  category: string;
  comment: string;
  description?: string;
  guidelines: string;
  figma: string;
  storybook: string;
  cdn: string;
  figmaLink?: string;
  storybookLink?: string;
  image?: File | null;
}
