interface Avatar {
  avatar: string;
  avatar_2x: string;
  avatar_webp: string;
  avatar_webp_2x: string;
}

interface DesignerInComment {
  avatar: string;
  username: string;
  thumbnails: Avatar;
}

export interface IComment {
  id: number;
  issue: string;
  designer: DesignerInComment;
  date_created: string;
  message: string;
}

interface DesignerIssue {
  id: number;
  key: string;
  date_created: string;
  date_started_by_designer: string | null;
  date_finished_by_designer: string | null;
  status: string;
}

export interface Designer {
  avatar: string;
  username: string;
  email: string;
  thumbnails: Avatar;
  issues: DesignerIssue[];
}

export interface IDesignersAPI {
  count: number;
  next: string | null;
  previous: string | null;
  results: Designer[];
}

export interface DesignerWithMedian extends Designer {
  median : number;
  doneIssues: number;
}