/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type { CtaProps } from "@kickstartds/swo/cta";
import type { DividerProps } from "@kickstartds/swo/divider";
import type { FaqProps } from "@kickstartds/swo/faq";
import type { FeaturesProps } from "@kickstartds/swo/features";
import type { GalleryProps } from "@kickstartds/swo/gallery";
import type { HeroProps } from "@kickstartds/swo/hero";
import type { HtmlProps } from "@kickstartds/swo/html";
import type { ImageStoryProps } from "@kickstartds/swo/image-story";
import type { ImageTextProps } from "@kickstartds/swo/image-text";
import type { LogosProps } from "@kickstartds/swo/logos";
import type { MosaicProps } from "@kickstartds/swo/mosaic";
import type { SliderProps } from "@kickstartds/swo/slider";
import type { StatsProps } from "@kickstartds/swo/stats";
import type { TeaserCardProps } from "@kickstartds/swo/teaser-card";
import type { TestimonialsProps } from "@kickstartds/swo/testimonials";
import type { TextProps } from "@kickstartds/swo/text";
import type { VideoCurtainProps } from "@kickstartds/swo/video-curtain";
import type { InfoTableProps } from "../info-table/InfoTableProps";
import type { ButtonProps } from "@kickstartds/swo/button";

/**
 * Width of section to use
 */
export type Width = "full" | "max" | "wide" | "default" | "narrow";
/**
 * Style of background
 */
export type Style =
  | "stagelights"
  | "horizontalGradient"
  | "verticalGradient"
  | "accentTransition"
  | "boldTransition"
  | "symmetricGlow"
  | "anchorGlow";
/**
 * Color of background
 */
export type Style1 = "default" | "accent" | "bold";
/**
 * Show spotlight behind cursor
 */
export type Spotlight = boolean;
/**
 * Amount of spacing before the section
 */
export type SpaceBefore = "default" | "small" | "none";
/**
 * Amount of spacing after the section
 */
export type SpaceAfter = "default" | "small" | "none";
/**
 * Whether to invert the section
 */
export type Inverted = boolean;
/**
 * Reserve additional spacing for a floating header
 */
export type HeaderSpacing = boolean;
/**
 * Headline Text for the section
 */
export type Headline = string;
/**
 * Make the headline larger
 */
export type LargeHeadline = boolean;
/**
 * Width of headline to use
 */
export type HeadlineWidth = "unset" | "narrow" | "default" | "wide";
/**
 * Choose the text alignment for the headline
 */
export type HeadlineTextAlignment = "left" | "center" | "right";
/**
 * Choose an alignment for positioning the headline
 */
export type HeadlineAlignment = "left" | "center" | "right";
/**
 * Subheadline for the section
 */
export type Subheadline = string;
/**
 * Switch the order of headline and subheadline
 */
export type SwitchHeadlineOrder = boolean;
/**
 * Width of content to use
 */
export type ContentWidth = "unset" | "narrow" | "default" | "wide";
/**
 * Choose an alignment for the content
 */
export type ContentAlignment = "left" | "center" | "right";
/**
 * Size of gutter to use
 */
export type Gutter = "large" | "default" | "small" | "none";
/**
 * Layout mode used for section contents
 */
export type Mode = "default" | "tile" | "list" | "slider";
/**
 * Set min-width for the tiles in the grid
 */
export type TileWidth = "smallest" | "default" | "medium" | "large" | "largest";
/**
 * Allowed components for content
 */
export type Content = (
  | CtaProps
  | DividerProps
  | FaqProps
  | FeaturesProps
  | GalleryProps
  | HeroProps
  | HtmlProps
  | ImageStoryProps
  | ImageTextProps
  | LogosProps
  | MosaicProps
  | SliderProps
  | StatsProps
  | TeaserCardProps
  | TestimonialsProps
  | TextProps
  | VideoCurtainProps
  | InfoTableProps
)[];
/**
 * Buttons of the Button Group
 */
export type Buttons = ButtonProps[];

/**
 * Component used to layout components into pages
 */
export interface SectionProps {
  width?: Width;
  style?: Style;
  backgroundColor?: Style1;
  spotlight?: Spotlight;
  spaceBefore?: SpaceBefore;
  spaceAfter?: SpaceAfter;
  inverted?: Inverted;
  headerSpacing?: HeaderSpacing;
  headline?: {
    text?: Headline;
    large?: LargeHeadline;
    width?: HeadlineWidth;
    textAlign?: HeadlineTextAlignment;
    align?: HeadlineAlignment;
    sub?: Subheadline;
    switchOrder?: SwitchHeadlineOrder;
  };
  content?: {
    width?: ContentWidth;
    align?: ContentAlignment;
    gutter?: Gutter;
    mode?: Mode;
    tileWidth?: TileWidth;
  };
  components?: Content;
  buttons?: Buttons;
}
