export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface NestedContent {
  id: number;
  type?: "link";
  content: string;
}

export interface Content {
  id: number;
  type: "paragraph";
  content: string | NestedContent[];
}

export interface PostData {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface CommentData {
  id: number;
  author: Omit<Author, "role">;
  text: string;
  likes: number;
}
