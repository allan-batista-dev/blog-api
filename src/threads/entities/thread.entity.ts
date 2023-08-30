import { Thread } from '@prisma/client';

export class ThreadEntity implements Thread {
    isActive: boolean;
    id: number;
    created_at: Date;
    updated_at: Date;
    title: string;
}
