import { create } from "zustand";

type RecordingStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useRecording = create<RecordingStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true }),
    onClose: () => set({ isOpen: false})
}));