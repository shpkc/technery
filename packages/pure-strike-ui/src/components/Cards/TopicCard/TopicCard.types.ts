import { ComponentBaseProps } from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

interface TopicCardOptions {
  title: string;
  bgColor: string;
  emoji: string;
  onClick?: MouseEventHandler;
}

export interface TopicCardProps extends ComponentBaseProps, TopicCardOptions {}

export interface TopicCardStyleProps
  extends Pick<TopicCardOptions, "bgColor"> {}
