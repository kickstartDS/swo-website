import {
  GalleryContext,
  GalleryContextDefault,
} from "@kickstartds/swo/components/gallery/index.js";
import {
  ComponentProps,
  FC,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { ImageRatioProvider } from "./ImageRatioContext";
import {
  ImageStoryContext,
  ImageStoryContextDefault,
} from "@kickstartds/swo/components/image-story/index.js";
import {
  ContactContext,
  ContactContextDefault,
} from "@kickstartds/swo/components/contact/index.js";
import {
  TeaserCardContext,
  TeaserCardContextDefault,
} from "@kickstartds/swo/components/teaser-card/index.js";
import {
  PostMetaContext,
  PostMetaContextDefault,
} from "@kickstartds/blog/lib/post-meta";

const GalleryProvider: FC<PropsWithChildren> = (props) => {
  const UpstreamGallery = useContext(GalleryContext);

  const Gallery = useMemo(
    () =>
      forwardRef<
        HTMLDivElement,
        ComponentProps<typeof GalleryContextDefault> &
          HTMLAttributes<HTMLDivElement>
      >(function GalleryImageRatio(props, ref) {
        // TODO read definition from tokens:
        /**
          --swo-gallery--image-ratio-square: 1/1;
          --swo-gallery--image-ratio-wide: 4/3;
          --swo-gallery--image-ratio-landscape: 16/9;
        */
        const aspectRatios = {
          unset: -1,
          square: 1 / 1,
          wide: 4 / 3,
          landscape: 16 / 9,
        };

        return (
          <ImageRatioProvider
            ratio={aspectRatios[props.aspectRatio || "unset"]}
          >
            <UpstreamGallery {...props} ref={ref} />
          </ImageRatioProvider>
        );
      }),
    [UpstreamGallery]
  );

  return <GalleryContext.Provider {...props} value={Gallery} />;
};

const ImageStoryProvider: FC<PropsWithChildren> = (props) => {
  const UpstreamImageStory = useContext(ImageStoryContext);

  const ImageStory = useMemo(
    () =>
      forwardRef<
        HTMLDivElement,
        ComponentProps<typeof ImageStoryContextDefault> &
          HTMLAttributes<HTMLDivElement>
      >(function ImageStoryImageRatio(props, ref) {
        // TODO read definition from tokens, need to extract them first though. Currently defined in code here:
        // https://github.com/kickstartDS/swo/blob/main/src/components/image-story/image-story.scss#L14-L35
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
            <UpstreamImageStory {...props} ref={ref} />
          </ImageRatioProvider>
        );
      }),
    [UpstreamImageStory]
  );

  return <ImageStoryContext.Provider {...props} value={ImageStory} />;
};

const ContactProvider: FC<PropsWithChildren> = (props) => {
  const UpstreamContact = useContext(ContactContext);

  const Contact = useMemo(
    () =>
      forwardRef<
        HTMLElement,
        ComponentProps<typeof ContactContextDefault> &
          HTMLAttributes<HTMLElement>
      >(function ContactImageRatio(props, ref) {
        // TODO read definition from tokens, need to extract them first though. Currently defined in code here:
        // https://github.com/kickstartDS/swo/blob/main/src/components/contact/contact.scss#L39-L49
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
            <UpstreamContact {...props} ref={ref} />
          </ImageRatioProvider>
        );
      }),
    [UpstreamContact]
  );

  return <ContactContext.Provider {...props} value={Contact} />;
};

const TeaserCardProvider: FC<PropsWithChildren> = (props) => {
  const UpstreamTeaserCard = useContext(TeaserCardContext);

  const TeaserCard = useMemo(
    () =>
      forwardRef<
        HTMLDivElement,
        ComponentProps<typeof TeaserCardContextDefault> &
          HTMLAttributes<HTMLDivElement>
      >(function TeaserCardImageRatio(props, ref) {
        // TODO read definition from tokens, need to extract them first though. Currently defined in code here:
        // https://github.com/kickstartDS/swo/blob/main/src/components/teaser-card/teaser-card.scss#L39-L55
        const aspectRatios = {
          unset: -1,
          square: 1 / 1,
          wide: 4 / 3,
          landscape: 16 / 9,
        };
        return (
          <ImageRatioProvider ratio={aspectRatios[props.imageRatio || "unset"]}>
            <UpstreamTeaserCard {...props} ref={ref} />
          </ImageRatioProvider>
        );
      }),
    [UpstreamTeaserCard]
  );

  return <TeaserCardContext.Provider {...props} value={TeaserCard} />;
};

const PostMetaProvider: FC<PropsWithChildren> = (props) => {
  const UpstreamPostMeta = useContext(PostMetaContext);

  const PostMeta = useMemo(
    () =>
      forwardRef<
        HTMLDivElement,
        ComponentProps<typeof PostMetaContextDefault> &
          HTMLAttributes<HTMLElement>
      >(function PostMetaImageRatio(props, ref) {
        return (
          <ImageRatioProvider ratio={1}>
            <UpstreamPostMeta {...props} ref={ref} />
          </ImageRatioProvider>
        );
      }),
    [UpstreamPostMeta]
  );

  return <PostMetaContext.Provider {...props} value={PostMeta} />;
};

const ImageRatioProviders = (props: PropsWithChildren) => (
  <PostMetaProvider>
    <TeaserCardProvider>
      <ContactProvider>
        <ImageStoryProvider>
          <GalleryProvider>{props.children}</GalleryProvider>
        </ImageStoryProvider>
      </ContactProvider>
    </TeaserCardProvider>
  </PostMetaProvider>
);

export default ImageRatioProviders;
