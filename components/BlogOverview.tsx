import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import {
  BlogOverviewStoryblok,
  BlogPostStoryblok,
  BlogTeaserStoryblok,
} from "@/types/components-schema";
import { Section } from "@kickstartds/ds-agency-premium/components/section/index.js";
import {
  BlogTeaser,
  BlogTeaserContext,
  BlogTeaserContextDefault,
} from "@kickstartds/ds-agency-premium/components/blog-teaser/index.js";
import { Cta } from "@kickstartds/ds-agency-premium/components/cta/index.js";
import { FC, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import { BlogTeaserProps } from "@kickstartds/ds-agency-premium/BlogTeaserProps-f5855e93.js";

type PageProps = {
  blok: BlogOverviewStoryblok;
};

export function isBlogPost(blok: any): blok is BlogPostStoryblok {
  return blok.type === "blog-post";
}

const BlogTeaserPost = forwardRef<
  HTMLDivElement,
  | (BlogTeaserStoryblok & HTMLAttributes<HTMLDivElement>)
  | (BlogPostStoryblok & HTMLAttributes<HTMLDivElement>)
>((props, ref) => {
  if (
    isBlogPost(props) &&
    props.head &&
    props.head[0] &&
    props.aside &&
    props.aside[0]
  ) {
    const teaserProps: BlogTeaserProps = {
      date: props.head[0]?.date,
      headline: props.head[0]?.headline || "",
      teaserText: props.head[0]?.headline || "",
      image: (props.head[0]?.image as unknown as string) || "",
      tags: props.head[0]?.tags || [],
      readingTime: props.aside[0].readingTime,
    };
    return <BlogTeaserContextDefault {...teaserProps} ref={ref} />;
  } else {
    return <BlogTeaserContextDefault {...props} ref={ref} />;
  }
});
BlogTeaserPost.displayName = "BlogTeaserPost";

const BlogTeaserPostProvider: FC<PropsWithChildren> = (props) => (
  <BlogTeaserContext.Provider {...props} value={BlogTeaserPost} />
);

const BlogOverview: React.FC<PageProps> = ({ blok }) => {
  if (blok) {
    const { latest, latestTitle, list, listTitle, cta, more, moreTitle } = blok;

    // TODO fix types (mostly just Tag)
    return (
      <main {...storyblokEditable(blok)}>
        <BlogTeaserPostProvider>
          {blok.section?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
          {latest && latest[0] && (
            <Section width="wide" headline={{ text: latestTitle }}>
              <BlogTeaser {...latest[0]} />
            </Section>
          )}
          {list && list.length > 0 && (
            <Section headline={{ text: listTitle }} content={{ mode: "list" }}>
              {list.map((article) => (
                <BlogTeaser {...article} key={article.headline} />
              ))}
            </Section>
          )}
          <hr />
          {more && more.length > 0 && (
            <Section headline={{ text: moreTitle }}>
              {more.map((article) => (
                <BlogTeaser {...article} key={article.headline} />
              ))}
            </Section>
          )}
          {cta && cta[0] && (
            <Section content={{ mode: "list" }}>
              {/* @ts-expect-error */}
              <Cta {...cta[0]} />
            </Section>
          )}
        </BlogTeaserPostProvider>
      </main>
    );
  }
  return null;
};

export default BlogOverview;
