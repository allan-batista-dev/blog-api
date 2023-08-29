import { Post } from "@prisma/client";

export class PostEntity implements Post {
    subtitle: string;
    id: number;
    created_at: Date;
    updated_at: Date;
    file: string;
    title: string;
    content: string;
    userId: number;
}
