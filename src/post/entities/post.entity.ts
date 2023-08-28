import { Post } from "@prisma/client";

export class PostEntity implements Post {
    id: number;
    created_at: Date;
    updated_at: Date;
    image: string;
    title: string;
    content: string;
    userId: number;
}
