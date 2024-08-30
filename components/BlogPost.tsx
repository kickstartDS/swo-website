import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
// import { BlogPostStoryblok } from "@/types/components-schema";
import { BlogPostProps } from "@kickstartds/ds-agency-premium/BlogPostProps-440f88a5.js";
import { Section } from "@kickstartds/ds-agency-premium/components/section/index.js";
import { Split } from "@kickstartds/ds-agency-premium/components/split/index.js";
import { BlogAside } from "@kickstartds/ds-agency-premium/components/blog-aside/index.js";
import { Text } from "@kickstartds/ds-agency-premium/components/text/index.js";
import { BlogHead } from "@kickstartds/ds-agency-premium/components/blog-head/index.js";
import { Cta } from "@kickstartds/ds-agency-premium/components/cta/index.js";

// type PageProps = {
//   blok: BlogPostStoryblok & SbBlokData;
// };

type PageProps = {
  blok: BlogPostProps & SbBlokData;
};

const BlogPost: React.FC<PageProps> = ({ blok }) => {
  if (blok) {
    const { cta, aside, head, content } = blok;

    return (
      <main {...storyblokEditable(blok)}>
        <Section width="wide">
          <Split layout="sidebarRight">
            <div>
              <BlogHead {...head[0]} />
              {content ? (
                <Text text={content} />
              ) : (
                blok.section?.map((nestedBlok) => (
                  <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))
              )}
            </div>
            {aside && <BlogAside {...aside} />}
          </Split>
        </Section>
        {cta && (
          <Section content={{ mode: "list" }}>
            <Cta {...cta} />
          </Section>
        )}
      </main>
    );
  }
  return null;
};

export default BlogPost;
