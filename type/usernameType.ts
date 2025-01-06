export interface UsernameResults {
    [key: string]: string;
  }
  
  export interface SearchState {
    isLoading: boolean;
    results: UsernameResults | null;
    error: string | null;
  }
  
  