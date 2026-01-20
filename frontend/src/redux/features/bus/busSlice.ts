import { createSlice } from "@reduxjs/toolkit";

interface Bus {
  id: string;
  name: string;
}

interface BusState {
  buses: Bus[];
  loading: boolean;
  assignedBus: Bus | null;
}

const initialState: BusState = {
  buses: [],
  loading: false,
  assignedBus: null,
};

const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
    setBuses: (state, action) => {
      state.buses = action.payload;
    },
    setAssignedBus: (state, action) => {
      state.assignedBus = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setBuses, setAssignedBus, setLoading } = busSlice.actions;
export default busSlice.reducer;
