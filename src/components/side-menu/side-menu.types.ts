export type SideMenuItem = {
  label: string;
  icon: string;
  link: string;
  active?: boolean;
};

export type SideMenuProps = {
  items: SideMenuItem[];
  className?: string;
};
