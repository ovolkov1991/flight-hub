import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SidebarItem = {
  name: string;
  path: string;
  icon: ReturnType<typeof findIconDefinition>;
};

export type SidebarItems = Record<string, SidebarItem[]>;
