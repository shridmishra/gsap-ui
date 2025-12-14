import { create } from "zustand";

const DEFAULT_COMPONENT = "border-frame";

interface ComponentExplorerState {
  // State
  mounted: boolean;
  activeComponent: string;
  sidebarOpen: boolean;
  codePanelOpen: boolean;
  searchOpen: boolean;

  // Actions
  setMounted: (mounted: boolean) => void;
  setActiveComponent: (id: string) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  closeSidebarOnMobile: () => void;
  openCodePanel: () => void;
  closeCodePanel: () => void;
  openSearch: () => void;
  closeSearch: () => void;
}

export const useComponentStore = create<ComponentExplorerState>((set) => ({
  // Initial state
  mounted: false,
  activeComponent: DEFAULT_COMPONENT,
  sidebarOpen: false,
  codePanelOpen: false,
  searchOpen: false,

  // Actions
  setMounted: (mounted) => set({ mounted }),
  
  setActiveComponent: (id) => set({ activeComponent: id }),
  
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  closeSidebarOnMobile: () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      set({ sidebarOpen: false });
    }
  },
  
  openCodePanel: () => set({ codePanelOpen: true }),
  
  closeCodePanel: () => set({ codePanelOpen: false }),
  
  openSearch: () => set({ searchOpen: true }),
  
  closeSearch: () => set({ searchOpen: false }),
}));

// Selector hooks for optimized re-renders
export const useActiveComponent = () => useComponentStore((state) => state.activeComponent);
export const useSidebarOpen = () => useComponentStore((state) => state.sidebarOpen);
export const useCodePanelOpen = () => useComponentStore((state) => state.codePanelOpen);
export const useSearchOpen = () => useComponentStore((state) => state.searchOpen);
export const useMounted = () => useComponentStore((state) => state.mounted);

// Actions object - stable references, no re-renders
export const componentActions = {
  setMounted: (mounted: boolean) => useComponentStore.setState({ mounted }),
  setActiveComponent: (id: string) => useComponentStore.setState({ activeComponent: id }),
  setSidebarOpen: (open: boolean) => useComponentStore.setState({ sidebarOpen: open }),
  toggleSidebar: () => useComponentStore.setState((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebarOnMobile: () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      useComponentStore.setState({ sidebarOpen: false });
    }
  },
  openCodePanel: () => useComponentStore.setState({ codePanelOpen: true }),
  closeCodePanel: () => useComponentStore.setState({ codePanelOpen: false }),
  openSearch: () => useComponentStore.setState({ searchOpen: true }),
  closeSearch: () => useComponentStore.setState({ searchOpen: false }),
};
