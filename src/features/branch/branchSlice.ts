import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Branch } from '@/types/session';

interface BranchState {
  branches: Branch[];
  selectedBranch: Branch | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: BranchState = {
  branches: [],
  selectedBranch: null,
  isLoading: false,
  error: null,
};

const branchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {
    setBranches(state, action: PayloadAction<Branch[]>) {
      state.branches = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    selectBranch(state, action: PayloadAction<Branch>) {
      state.selectedBranch = action.payload;
    },
    setBranchLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setBranchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    }
  },
});

export const { setBranches, selectBranch, setBranchLoading, setBranchError } = branchSlice.actions;
export default branchSlice.reducer;
