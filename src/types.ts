export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface NestedContent {
  type?: "link";
  content: string;
}

export interface Content {
  type: "paragraph";
  content: string | NestedContent[];
}

export interface PostData {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}
