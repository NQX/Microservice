import { Publisher, OrderCreatedEvent, Subjects } from '@nqx1/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

