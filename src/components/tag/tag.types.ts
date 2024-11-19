import { ReactNode } from "react";

export type TagType = "default" | "success" | "warning" | "info";

export type TagProps = {
  children: ReactNode;
  type?: TagType;
  className?: string;
};
