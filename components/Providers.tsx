/*  eslint react/display-name: 0 */
import {
  AnchorHTMLAttributes,
  ComponentProps,
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import NextLink from "next/link";
import { blurhashToCssGradientString } from "@unpic/placeholder";
import { Image } from "@unpic/react/nextjs";

import {
  PictureContext,
  PictureContextDefault,
} from "@kickstartds/base/lib/picture";
import { LinkContext, LinkProps } from "@kickstartds/base/lib/link";
import { PictureProps } from "@kickstartds/base/lib/picture/typing";
import {
  StorytellingContext,
  StorytellingContextDefault,
} from "@kickstartds/content/lib/storytelling";

import { NavTopbarProvider } from "./nav-topbar/NavTopbarComponent";

import { BlogAsideContext } from "@kickstartds/ds-agency-premium/blog-aside";
import { BlogHeadContext } from "@kickstartds/ds-agency-premium/blog-head";
import { CtaContext } from "@kickstartds/ds-agency-premium/cta";
import { FeatureContext } from "@kickstartds/ds-agency-premium/feature";
import { StatContext } from "@kickstartds/ds-agency-premium/stat";
import { TestimonialContext } from "@kickstartds/ds-agency-premium/testimonial";

import { INDEX_SLUG } from "@/helpers/storyblok";

import { StoryblokSubComponent } from "./StoryblokSubComponent";
import { TeaserProvider } from "./TeaserProvider";
import { useBlurHashes } from "./BlurHashContext";
import { useImagePriority } from "./ImagePriorityContext";
import { AssetStoryblok, MultilinkStoryblok } from "@/types/components-schema";
import { StorytellingProps } from "@kickstartds/content/lib/storytelling/typing";

function isStoryblokLink(object: unknown): object is MultilinkStoryblok {
  return (object as MultilinkStoryblok)?.linktype !== undefined;
}

function isStoryblokAsset(object: unknown): object is AssetStoryblok {
  return (object as AssetStoryblok)?.filename !== undefined;
}

const Providers = (props: PropsWithChildren) => (
  <TeaserProvider>
    {/* @ts-expect-error */}
    <CtaContext.Provider value={StoryblokSubComponent}>
      {/* @ts-expect-error */}
      <FeatureContext.Provider value={StoryblokSubComponent}>
        {/* @ts-expect-error */}
        <StatContext.Provider value={StoryblokSubComponent}>
          {/* @ts-expect-error */}
          <TestimonialContext.Provider value={StoryblokSubComponent}>
            {/* @ts-expect-error */}
            <BlogHeadContext.Provider value={StoryblokSubComponent}>
              <BlogAsideContext.Provider
                // @ts-expect-error
                value={StoryblokSubComponent}
              >
                {props.children}
              </BlogAsideContext.Provider>
            </BlogHeadContext.Provider>
          </TestimonialContext.Provider>
        </StatContext.Provider>
      </FeatureContext.Provider>
    </CtaContext.Provider>
  </TeaserProvider>
);

export default Providers;
