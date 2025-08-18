import axios, { AxiosResponse } from 'axios';
import { IComponentForm } from '../interfaces/component.interface';
import { baseUrl } from '.';

/**
 * Updates a component in the database
 * @param component - The component data to update
 * @returns Promise with the updated component data
 */
export const updateComponent = async (component: IComponentForm): Promise<AxiosResponse<IComponentForm>> => {
    // Build payload including Component fields plus related arrays (status, links)
    const base: Record<string, any> = {
        id: component.id,
        name: component.name,
        description: component.description,
        // Backend uses "notes"; our form uses "comment"
        notes: (component as any).notes ?? component.comment,
        // If image is a File, backend likely expects URL string handled elsewhere; only send string
        image: typeof component.image === 'string' ? component.image : undefined,
        categoryId: component.categoryId
    };

    // Build status relations if any stage provided
    const rawStatus = [
        { platformName: 'guidelines', stage: component.guidelines },
        { platformName: 'figma', stage: component.figma },
        { platformName: 'storybook', stage: component.storybook },
        { platformName: 'cdn', stage: component.cdn }
    ].filter((s) => s.stage !== '' && s.stage !== null && s.stage !== undefined);

    // Build links relations if any link provided
    const rawLinks = [
        { platformName: 'figmaLink', link: component.figmaLink },
        { platformName: 'storybookLink', link: component.storybookLink }
    ].filter((l) => l.link !== '' && l.link !== null && l.link !== undefined);

    const payload: Record<string, any> = {
        ...base,
        ...(rawStatus.length ? { status: rawStatus } : {}),
        ...(rawLinks.length ? { links: rawLinks } : {})
    };

    // Remove empty string, null, and undefined values while preserving valid falsy values (0, false)
    const cleanedPayload = Object.fromEntries(
        Object.entries(payload).filter(([, value]) => value !== '' && value !== null && value !== undefined)
    );

    try {
        const url = `${baseUrl}/components/${component.id}`;
        const response = await axios.patch<IComponentForm>(url, cleanedPayload);
        return response;
    } catch (error) {
        console.error(' Error updating component:', error);
        throw error;
    }
};
