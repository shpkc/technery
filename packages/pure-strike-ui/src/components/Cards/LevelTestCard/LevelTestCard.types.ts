import { ComponentBaseProps } from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

export enum LevelTestStatus {
  OnGoing = "onGoing",
  Finished = "finished",
}

interface LevelTestCardOptions {
  title: string;
  description: string;
  status: LevelTestStatus;
  statusText: string;
  onClick?: MouseEventHandler;
}

export interface LevelTestCardProps
  extends ComponentBaseProps,
    LevelTestCardOptions {}

export type LevelTestStyledProps = Pick<LevelTestCardOptions, "status">;
