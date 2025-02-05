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
  category: string;
}

export interface ICategoryApi {
  category: string;
  components: IComponentApi[];
}

export interface IComponentForm {
  name: string;
  category: string;
  comment: string;
  guidelines: string;
  figma: string;
  storybook: string;
  cdn: string;
}
