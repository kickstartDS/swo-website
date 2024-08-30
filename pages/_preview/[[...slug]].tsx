import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  useStoryblokState,
  StoryblokComponent,
  ISbStory,
  ISbStoryData,
  useStoryblokApi,
  getStoryblokApi,
  useStoryblokBridge,
  StoryblokBridgeV2,
} from "@storyblok/react";
import {
  fetchPageProps,
  fetchPaths,
  resolveStoryUuids,
  sbParams,
  storyProcessing,
} from "@/helpers/storyblok";
import { fontClassNamesPreview } from "@/helpers/fonts";
import { useEffect, useMemo } from "react";

type PageProps = ISbStory["data"] & {
  settings?: ISbStoryData["content"];
};

const Page: NextPage<PageProps> = ({ story: initialStory }) => {
  const api = getStoryblokApi();
  const story = useStoryblokState(initialStory, sbParams(true));

  useEffect(() => {
    console.log("test", window.storyblokRegisterEvent);
    window.storyblokRegisterEvent(() => {
      console.log("registering");
      const sbBridge: StoryblokBridgeV2 = new window.StoryblokBridge();
      console.log("bridge", sbBridge);
      sbBridge.on(["input", "published", "change"], (event) => {
        console.log("EVENT", event);
      });
    });
  }, []);

  const memoizedStory = useMemo(() => {
    if (story) {
      if (api) resolveStoryUuids(story, api);
      if (api) console.log("API", api);

      return storyProcessing(story);
    }
  }, [story, api]);

  return memoizedStory ? (
    <StoryblokComponent
      blok={memoizedStory.content}
      data-font-class-names={fontClassNamesPreview}
    />
  ) : null;
};

export default Page;

export const getStaticPaths = (async () => {
  return {
    paths: (await fetchPaths()).map((path) => {
      return {
        params: {
          slug: path.params.slug,
        },
      };
    }),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params, previewData }) => {
  if (!previewData) {
    return {
      notFound: true,
    };
  }

  const StoryblokClient = await import("storyblok-js-client").then(
    (mod) => mod.default
  );
  const previewStoryblokApi = new StoryblokClient({ accessToken: previewData });
  const slug = params?.slug?.join("/");
  try {
    const { pageData, settingsData } = await fetchPageProps(
      slug,
      previewStoryblokApi
    );

    return {
      props: {
        ...pageData,
        blurHashes: {},
        fontClassNames: fontClassNamesPreview,
        settings: settingsData.stories[0]?.content || null,
        key: pageData.story.id,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}) satisfies GetStaticProps<PageProps, NodeJS.Dict<string[]>, string>;
