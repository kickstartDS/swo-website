import { unflatten } from "@/helpers/unflatten";
import { StoryblokComponent } from "@storyblok/react";
import { forwardRef } from "react";

const isStoryblokComponent = (
  blok: any
): blok is { content: Record<string, any> } =>
  blok.content !== undefined && blok.id !== undefined;

// eslint-disable-next-line react/display-name
export const StoryblokSubComponent = forwardRef<HTMLElement>((props, ref) => (
  <StoryblokComponent
    blok={unflatten(isStoryblokComponent(props) ? props.content : props)}
    ref={ref}
  />
));
