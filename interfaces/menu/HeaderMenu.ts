interface menu {
  title: string;
  link?: string;
  subMenu?: ISubmenu[];
}

interface ISubmenu {
  title: string;
  link?: string;
}
