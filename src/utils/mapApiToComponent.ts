import { IComponentApi } from '../interfaces/component.interface';
import { Component } from '../redux/types/currentComponentTypes';

export const mapApiToComponent = (apiComponent: IComponentApi): Component => {
  // Convert status array to statuses object
  const statuses = {
    guidelines: apiComponent.status.find(s => s.platformName === 'guidelines')?.stage || '',
    figma: apiComponent.status.find(s => s.platformName === 'figma')?.stage || '',
    storybook: apiComponent.status.find(s => s.platformName === 'storybook')?.stage || '',
    cdn: apiComponent.status.find(s => s.platformName === 'cdn')?.stage || ''
  };

  return {
    id: apiComponent.id,
    name: apiComponent.name,
    description: apiComponent.description || '',
    category: apiComponent.category,
    comment: apiComponent.comment,
    image: apiComponent.image || null,
    createdAt: apiComponent.createdAt,
    updatedAt: apiComponent.updatedAt,
    statuses: [statuses],
    storybookLink: apiComponent.storybookLink || '',
    figmaLink: apiComponent.figmaLink || ''
  };
};
