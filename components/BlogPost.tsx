import { storyblokEditable } from "@storyblok/react";
import { BlogPost as BlogPostComponent } from "@kickstartds/ds-agency-premium/blog-post";
import { unflatten } from "@/helpers/unflatten";
import { BlogPostStoryblok } from "@/types/components-schema";
import {
  TagLabelContext,
  TagLabelContextDefault,
} from "@kickstartds/base/lib/tag-label";

type PageProps = {
  blok: BlogPostStoryblok;
};

const Tag = ({ label, ...props }: any) => (
  <TagLabelContextDefault label={label?.entry} {...props} />
);

const BlogPost: React.FC<PageProps> = ({ blok }) => {
  if (blok) {
    const { cta, seo, aside, head, content } = blok;
    const blogPost = {
      cta: cta && cta[0] && cta[0].content ? unflatten(cta?.[0].content) : {},
      seo: seo && seo[0] ? unflatten(seo?.[0]) : {},
      aside: aside && aside[0] ? unflatten(aside?.[0]) : {},
      head: head && head[0] ? unflatten(head?.[0]) : {},
      content: content || "",
    };

    return (
      <main {...storyblokEditable(blok)}>
        {/* @ts-expect-error */}
        <TagLabelContext.Provider value={Tag}>
          {/* @ts-expect-error */}
          <BlogPostComponent {...blogPost} />
        </TagLabelContext.Provider>
      </main>
    );
  }
  return null;
};

export default BlogPost;
