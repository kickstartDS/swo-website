import {
  ISbStories,
  ISbStoriesParams,
  getStoryblokApi,
  apiPlugin,
  storyblokInit,
  ISbStory,
  StoryblokClient,
  ISbStoryData,
  ISbStoryParams,
} from "@storyblok/react";
import { components } from "@/components";
import { traverse } from "object-traversal";
import {
  GlobalReferenceStoryblok,
  GlobalStoryblok,
} from "@/types/components-schema";

export function initStoryblok(accessToken?: string) {
  storyblokInit({
    accessToken,
    use: accessToken ? [apiPlugin] : undefined,
    components,
  });
}

export function isStoryblokComponent(
  blok: any
): blok is { content: Record<string, any> } {
  return blok.content !== undefined && blok.id !== undefined;
}

export function isGlobalReference(blok: any): blok is GlobalReferenceStoryblok {
  return blok.component === "global_reference";
}

export function isGlobal(blok: any): blok is GlobalStoryblok {
  return blok.component === "global";
}

export function removeEmptyImages(blok: Record<string, any>) {
  traverse(blok, ({ parent, key, value }) => {
    if (
      parent &&
      key &&
      value &&
      typeof value === "object" &&
      value.fieldtype === "asset" &&
      value.id === null
    ) {
      delete parent[key];
    }
  });

  return blok;
}

let lastContentVersion: number | undefined = undefined;

export const sbParams = (
  draft: boolean,
  params: ISbStoriesParams | ISbStoryParams = {}
): ISbStoriesParams | ISbStoryParams => ({
  version: draft ? "draft" : "published",
  cv: lastContentVersion,
  resolve_links: "url",
  ...params,
});

export async function fetchUuid(uuid: string, storyblokApi?: StoryblokClient) {
  const storyblok = storyblokApi || getStoryblokApi();

  const response: ISbStory = await storyblok.get(
    `cdn/stories/${uuid}`,
    sbParams(!!storyblokApi, { find_by: "uuid" })
  );

  return response.data.story;
}

export async function resolveStoryUuids(
  story: ISbStoryData,
  storyblokApi?: StoryblokClient
) {
  const promises: Promise<any>[] = [];
  traverse(story, ({ parent, key, value }) => {
    if (
      parent &&
      key &&
      !["_uid", "uuid", "group_id", "id"].includes(key) &&
      typeof value === "string" &&
      value.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
      )
    ) {
      promises.push(
        fetchUuid(value, storyblokApi).then((data) => {
          parent[key] = data.content;

          return resolveStoryUuids(data, storyblokApi);
        })
      );
    }
  });

  await Promise.all(promises);
}

export async function fetchStory(
  slug: string,
  resolveUuids: boolean = false,
  previewStoryblokApi?: StoryblokClient
) {
  const storyblokApi = previewStoryblokApi || getStoryblokApi();
  const response: ISbStory = await storyblokApi.get(
    `cdn/stories/${slug}`,
    sbParams(!!previewStoryblokApi)
  );

  lastContentVersion = response.data.cv;

  if (resolveUuids) await resolveStoryUuids(response.data.story, storyblokApi);
  removeEmptyImages(response.data.story.content);

  return response;
}

// TODO: https://www.storyblok.com/docs/api/content-delivery/v2#topics/pagination
export async function fetchStories(
  params?: ISbStoriesParams,
  resolveUuids: boolean = false,
  previewStoryblokApi?: StoryblokClient
) {
  const storyblokApi = previewStoryblokApi || getStoryblokApi();
  const response: ISbStories = await storyblokApi.get(
    `cdn/stories`,
    sbParams(!!previewStoryblokApi, { per_page: 100, ...params })
  );

  if (resolveUuids) {
    for (const story of response.data.stories) {
      await resolveStoryUuids(story, storyblokApi);
      removeEmptyImages(story.content);
    }
  }

  lastContentVersion = response.data.cv;
  return response;
}

export async function fetchPaths() {
  const { data } = await fetchStories();
  return data.stories
    .filter((story) => story.content.component !== "settings")
    .map((story) => {
      const slug =
        story.full_slug === INDEX_SLUG ? [] : story.full_slug.split("/");

      return {
        params: {
          slug,
          updated_at: story.published_at,
        },
      };
    });
}

export async function fetchPageProps(
  slug: string = INDEX_SLUG,
  previewStoryblokApi?: StoryblokClient
) {
  const [{ data: pageData }, { data: settingsData }] = await Promise.all([
    fetchStory(slug, true, previewStoryblokApi),
    fetchStories({ content_type: "settings" }, false, previewStoryblokApi),
  ]);
  return { pageData, settingsData };
}

export const INDEX_SLUG = "home";
