import { Publisher, Subjects, TicketUpdatedEvent } from '@nqx1/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

