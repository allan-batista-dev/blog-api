import { Comment } from "@prisma/client";

export class CommentEntity implements Comment {
    id: number;
    created_at: Date;
    updated_at: Date;
    text: string;
    nameAuthor: string;
    postId: number;
}
