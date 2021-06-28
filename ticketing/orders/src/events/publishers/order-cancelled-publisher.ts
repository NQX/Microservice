import { Publisher, OrderCancelledEvent, Subjects } from '@nqx1/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

