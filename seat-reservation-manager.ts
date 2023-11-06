// https://leetcode.com/problems/seat-reservation-manager/


class SeatManager {
    private seats: number[];
    private availableSeats: Set<number>;

    constructor(n: number) {
        this.seats = Array.from({length: n}, (_, i) => i + 1);
        this.availableSeats = new Set(this.seats);
    }

    reserve(): number {
        const seat = Math.min(...this.availableSeats);
        this.availableSeats.delete(seat);
        return seat;
    }

    unreserve(seatNumber: number): void {
        this.availableSeats.add(seatNumber);
    }
}