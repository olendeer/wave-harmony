import { ChangeEvent, ReactElement } from "react";

export type ChildrenProp = ReactElement | ReactElement[] | string

export type ChangeInput = (event: ChangeEvent<HTMLInputElement>) => void