export interface Answers {
    name: string,
    type: string,
    ticketUsage: number,
    from: string,
    to: string,
    date: Date,
    durationType: string
}

export interface Ticket {
    location: string,
    time: string,
    duration: string,
    price: string
}

export interface State {
    answers: Answers,
    ticket: Ticket
}