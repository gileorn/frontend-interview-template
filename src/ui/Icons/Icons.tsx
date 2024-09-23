import React from "react";

import { ChevronRight, ChevronDown, Loader, XCircle } from "react-feather";

const icons = {
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  loader: Loader,
  alert: XCircle,
};

export type IconsType = keyof typeof icons;

export const Icon = ({
  type,
  size = 24,
  color,
}: {
  type: IconsType;
  size?: number;
  color?: string;
}) => {
  if (!type) {
    return null;
  }

  const Component = icons[type];

  return <Component size={size} color={color} />;
};
