import create from 'zustand';

interface LikeCount {
  count: number;
  increment: () => void;
  reset: () => void;
}

const useMarketplace = create<LikeCount>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  reset: () => set(() => ({count: 0})),
}));

export default useMarketplace;
