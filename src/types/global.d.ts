export {};

declare global {
  interface Window {
    showPage: (page: string) => void;
    filterCommunities: () => void;
    createCommunity: (e: Event) => void;
    toggleAccessCode: () => void;
    previewImage: (e: Event) => void;
  }
}
