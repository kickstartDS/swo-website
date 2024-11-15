import {
  GalleryContext,
  GalleryContextDefault,
} from "@kickstartds/ds-agency-premium/components/gallery/index.js";
import {
  ComponentProps,
  FC,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { ImageRatioProvider } from "./ImageRatioContext";
import {
  ImageStoryContext,
  ImageStoryContextDefault,
} from "@kickstartds/ds-agency-premium/components/image-story/index.js";
import {
  ContactContext,
  ContactContextDefault,
} from "@kickstartds/ds-agency-premium/components/contact/index.js";
import {
  TeaserCardContext,
  TeaserCardContextDefault,
} from "@kickstartds/ds-agency-premium/components/teaser-card/index.js";
import { Teaser } from "@kickstartds/base/lib/teaser";

const Gallery = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof GalleryContextDefault> & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  // TODO read definition from tokens:
  /**
  --dsa-gallery--image-ratio-square: 1/1;
  --dsa-gallery--image-ratio-wide: 4/3;
  --dsa-gallery--image-ratio-landscape: 16/9;
 */
  const aspectRatios = {
    unset: -1,
    square: 1 / 1,
    wide: 4 / 3,
    landscape: 16 / 9,
  };

  return (
    <ImageRatioProvider ratio={aspectRatios[props.aspectRatio || "unset"]}>
      <GalleryContextDefault {...props} ref={ref} />
    </ImageRatioProvider>
  );
});
Gallery.displayName = "Gallery";

const GalleryProvider: FC<PropsWithChildren> = (props) => (
  <GalleryContext.Provider {...props} value={Gallery} />
);

const ImageStory = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof ImageStoryContextDefault> &
    HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  // TODO read definition from tokens, need to extract them first though. Currently defined in code here:
  // https://github.com/kickstartDS/ds-agency-premium/blob/main/src/components/image-story/image-story.scss#L14-L35
  const aspectRatios = {
    unset: -1,
    square: 1 / 1,
    wide: 4 / 3,
    landscape: 16 / 9,
  };

  return (
    <ImageRatioProvider
      ratio={aspectRatios[props.image?.aspectRatio || "unset"]}
    >
      <ImageStoryContextDefault {...props} ref={ref} />
    </ImageRatioProvider>
  );
});
ImageStory.displayName = "ImageStory";

const ImageStoryProvider: FC<PropsWithChildren> = (props) => (
  <ImageStoryContext.Provider {...props} value={ImageStory} />
);

const Contact = forwardRef<
  HTMLElement,
  ComponentProps<typeof ContactContextDefault> & HTMLAttributes<HTMLElement>
>((props, ref) => {
  // TODO read definition from tokens, need to extract them first though. Currently defined in code here:
  // https://github.com/kickstartDS/ds-agency-premium/blob/main/src/components/contact/contact.scss#L39-L49
  const aspectRatios = {
    unset: -1,
    wide: 4 / 3,
    square: 1 / 1,
    vertical: 3 / 4,
  };
  return (
    <ImageRatioProvider
      ratio={aspectRatios[props.image?.aspectRatio || "unset"]}
    >
      <ContactContextDefault {...props} ref={ref} />
    </ImageRatioProvider>
  );
});
Contact.displayName = "Contact";

const ContactProvider: FC<PropsWithChildren> = (props) => (
  <ContactContext.Provider {...props} value={Contact} />
);

const TeaserCard = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof TeaserCardContextDefault> &
    HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  // TODO read definition from tokens, need to extract them first though. Currently defined in code here:
  // https://github.com/kickstartDS/ds-agency-premium/blob/main/src/components/teaser-card/teaser-card.scss#L39-L55
  const aspectRatios = {
    unset: -1,
    square: 1 / 1,
    wide: 4 / 3,
    landscape: 16 / 9,
  };
  console.log("TeaserCard", aspectRatios[props.imageRatio || "unset"]);
  return (
    <ImageRatioProvider ratio={aspectRatios[props.imageRatio || "unset"]}>
      <TeaserCardContextDefault {...props} ref={ref} />
    </ImageRatioProvider>
  );
});
TeaserCard.displayName = "TeaserCard";

const TeaserCardProvider: FC<PropsWithChildren> = (props) => (
  <TeaserCardContext.Provider {...props} value={TeaserCard} />
);

const ImageRatioProviders = (props: PropsWithChildren) => (
  <TeaserCardProvider>
    <ContactProvider>
      <ImageStoryProvider>
        <GalleryProvider>{props.children}</GalleryProvider>
      </ImageStoryProvider>
    </ContactProvider>
  </TeaserCardProvider>
);

export default ImageRatioProviders;
