import { Thread } from '@prisma/client';

export class ThreadEntity implements Thread {
    id: number;
    created_at: Date;
    updated_at: Date;
    title: string;
}
