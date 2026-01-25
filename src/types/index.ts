// Component Registry Types
export interface ComponentItem {
  name: string;
  id: string;
  isFree: boolean;
  description: string;
  url: string;
  installation?: string;
  previewBackground?: string;
  keywords?: string[];
}

export interface CodeFile {
  fileName: string;
  code: string;
  language: string;
}

export type RegistryCodeEntry = 
  | string 
  | {
      code: string; // The default/main code (React TS)
      html?: string; // HTML variant (single string with embedded CSS/JS)
    };


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
