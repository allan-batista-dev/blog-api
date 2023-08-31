import { NewsLetterFullBlogSubscription, ThreadNewsletterSubscription } from "@prisma/client";

export class NewsLetterFullBlogSubscriptionEntity implements NewsLetterFullBlogSubscription {
    usersId: number;
    id: number;
    created_at: Date;
    updated_at: Date;
    email: string;
}

export class ThreadNewsletterSubscriptionEntity implements ThreadNewsletterSubscription {
    id: number;
    created_at: Date;
    updated_at: Date;
    email: string;
    threadId: number;

}
