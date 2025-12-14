// Component Registry Types
export interface ComponentItem {
  name: string;
  id: string;
  isFree: boolean;
  description: string;
  installation?: string;
}

export interface ComponentCategory {
  category: string;
  items: ComponentItem[];
}

// Component Explorer State Types
export interface ComponentExplorerState {
  mounted: boolean;
  activeComponent: string;
  sidebarOpen: boolean;
  codePanelOpen: boolean;
  searchOpen: boolean;
}

export interface ComponentExplorerActions {
  setActiveComponent: (id: string) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openCodePanel: () => void;
  closeCodePanel: () => void;
  openSearch: () => void;
  closeSearch: () => void;
}

export type ComponentExplorer = ComponentExplorerState & ComponentExplorerActions;
