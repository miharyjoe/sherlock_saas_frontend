export interface Website {
  errorMsg?: string | string[];
  errorType: string;
  regexCheck?: string;
  url: string;
  urlMain: string;
  urlProbe?: string;
  username_claimed: string;
  headers?: Record<string, string>;
}

export interface Websites {
  [key: string]: Website;
}
