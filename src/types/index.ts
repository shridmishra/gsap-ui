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
  componentType?: "react" | "html"; // Default: "react"
  needsReload?: boolean; // Show reload button to replay animations
}


export interface CodeFile {
  fileName: string;
  code: string;
  language: string;
}

export type RegistryCodeEntry =
  | string // Plain React code as string
  | {
    code: string; // React code (required for React components)
    html?: string; // Optional HTML variant
  }
  | {
    html: string; // HTML-only component
    code?: never; // No React code
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
