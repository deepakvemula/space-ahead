import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'post'>, itemB: CollectionEntry<'post'>) {
    return new Date(itemB.data.pubDate).getTime() - new Date(itemA.data.pubDate).getTime();
}

export function createSlugFromTitle(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}