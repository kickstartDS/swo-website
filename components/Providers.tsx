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
import {
  NavTopbarContextDefault as DsaNavTopbar,
  NavTopbarContext,
} from "@kickstartds/ds-agency-premium/nav-topbar";

import { BlogAsideContext } from "@kickstartds/ds-agency-premium/blog-aside";
import { BlogHeadContext } from "@kickstartds/ds-agency-premium/blog-head";
import { CtaContext } from "@kickstartds/ds-agency-premium/cta";
import { FeatureContext } from "@kickstartds/ds-agency-premium/feature";
import { StatContext } from "@kickstartds/ds-agency-premium/stat";
import { TestimonialContext } from "@kickstartds/ds-agency-premium/testimonial";

import { isStoryblokAsset } from "@/helpers/storyblok";

import { StoryblokSubComponent } from "./StoryblokSubComponent";
import { TeaserProvider } from "./TeaserProvider";
import { useBlurHashes } from "./BlurHashContext";
import { useImagePriority } from "./ImagePriorityContext";
import { StorytellingProps } from "@kickstartds/content/lib/storytelling/typing";
import { Button } from "@kickstartds/ds-agency-premium/components/button/index.js";

const Link = forwardRef<
  HTMLAnchorElement,
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, ...props }, ref) => (
  <NextLink ref={ref} href={href || "#"} {...props} />
));

const LinkProvider: FC<PropsWithChildren> = (props) => (
  <LinkContext.Provider value={Link} {...props} />
);

const resetBackgroundBlurHash = (image: HTMLImageElement) => {
  requestAnimationFrame(() => {
    image.style.background = "";
  });
};

const Picture = forwardRef<
  HTMLImageElement,
  PictureProps & ImgHTMLAttributes<HTMLImageElement> & { autoSize?: boolean }
>(({ src, lazy, autoSize, ...props }, ref) => {
  const internalRef = useRef<HTMLImageElement>(null);

  const blurHashes = useBlurHashes();
  const priority = useImagePriority();

  useImperativeHandle<HTMLImageElement | null, HTMLImageElement | null>(
    ref,
    () => internalRef.current
  );

  useEffect(() => {
    if (internalRef.current) resetBackgroundBlurHash(internalRef.current);
  }, []);

  if (!src) return;
  // const source = isStoryblokAsset(src) ? src.filename : src;
  // const fileUrl = !source.startsWith("http") ? `https:${source}` : source;
  // console.log("src props", typeof src, src, props);
  const [width, height] = src.match(/\/(\d+)x(\d+)\//)?.slice(1) || [];

  return src.endsWith(".svg") ? (
    <PictureContextDefault
      ref={internalRef}
      {...props}
      src={src}
      width={parseInt(width, 10)}
      height={parseInt(height, 10)}
      alt={isStoryblokAsset(src) && src.alt ? src.alt : props.alt || ""}
      lazy={lazy}
    />
  ) : (
    <Image
      ref={internalRef}
      {...props}
      alt={isStoryblokAsset(src) && src.alt ? src.alt : props.alt || ""}
      src={priority ? `${src}/m/filters:quality(50)` : src}
      width={autoSize ? undefined : parseInt(width, 10)}
      height={autoSize ? undefined : parseInt(height, 10)}
      priority={lazy === false || priority}
      onLoad={(event) => {
        if (event.target instanceof HTMLImageElement) {
          resetBackgroundBlurHash(event.target);
        }
      }}
      background={
        blurHashes[src]
          ? blurhashToCssGradientString(blurHashes[src])
          : undefined
      }
      // @ts-expect-error `null` is not documented
      objectFit={null}
    />
  );
});

const PictureProvider: FC<PropsWithChildren> = (props) => (
  <PictureContext.Provider {...props} value={Picture} />
);

const Storytelling = forwardRef<
  HTMLDivElement,
  StorytellingProps & HTMLAttributes<HTMLDivElement>
>(({ backgroundImage, ...props }, ref) => {
  return (
    <StorytellingContextDefault
      {...props}
      backgroundImage={
        isStoryblokAsset(backgroundImage)
          ? backgroundImage.filename
          : backgroundImage
      }
      ref={ref}
    />
  );
});

const StorytellingProvider: FC<PropsWithChildren> = (props) => (
  <StorytellingContext.Provider {...props} value={Storytelling} />
);

const NavTopbar = forwardRef<HTMLElement, ComponentProps<typeof DsaNavTopbar>>(
  (props, ref) => {
    return (
      <>
        <DsaNavTopbar {...props} ref={ref} />
        <Button label="Lorem" />
      </>
    );
  }
);

const NavTopbarProvider: FC<PropsWithChildren> = (props) => (
  <NavTopbarContext.Provider {...props} value={NavTopbar} />
);

const Providers = (props: PropsWithChildren) => (
  <NavTopbarProvider>
    <StorytellingProvider>
      <PictureProvider>
        <LinkProvider>
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
        </LinkProvider>
      </PictureProvider>
    </StorytellingProvider>
  </NavTopbarProvider>
);

export default Providers;
