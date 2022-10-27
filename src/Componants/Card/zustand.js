import create from "zustand";

const useStore = create((set, get) => ({

    data: [],
    //set data
    setData: (data) => {
        set((state) => ({
            ...state,
            data,
        }));
    },
}));

export default useStore;