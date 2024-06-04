const { D } = require('../src/index');

describe('D Class', () => {
    const testDate = new D(2025, 5, 4, 3, 4, 5);

    test('should return the correct year', () => {
        expect(testDate.year).toBe(2025);
    });

    test('should return the correct last two digits of the year', () => {
        expect(testDate.yr).toBe(25);
    });

    test('should return the correct full month name', () => {
        expect(testDate.month).toBe('June');
    });

    test('should return the correct short month name', () => {
        expect(testDate.mon).toBe('Jun');
    });

    test('should return the correct full day name', () => {
        expect(testDate.day).toBe('Wednesday');
    });

    test('should return the correct short day name', () => {
        expect(testDate.dy).toBe('Wed');
    });

    test('should return the correct date of the month', () => {
        expect(testDate.date).toBe(4);
    });

    test('should return the correct hours', () => {
        expect(testDate.hours).toBe(3);
    });

    test('should return the correct minutes', () => {
        expect(testDate.mins).toBe(4);
    });

    test('should return the correct seconds', () => {
        expect(testDate.secs).toBe(5);
    });

    test('should return formatted date with default format', () => {
        expect(testDate.format()).toBe('2025 June 4');
    });

    test('should return formatted date with custom format', () => {
        expect(testDate.format('Y-M-D H:I:S')).toBe('2025-June-4 03:04:05');
    });

    test('should return the correct time difference in years', () => {
        const futureDate = new D(2028, 0, 0, 3, 4, 5);
        expect(futureDate.when(2024, 0, 0, 0, 0, 0)).toBe('In 4 years');
    });

    test('should return the correct time difference in months', () => {
        const futureDate = new D(2024, 3, 10, 0, 0, 0);
        expect(futureDate.when(2024, 0, 10, 0, 0, 0)).toBe('In 3 months');
    });

    test('should return the correct time difference in days', () => {
        const futureDate = new D(2024, 0, 13, 0, 0, 0);
        expect(futureDate.when(2024, 0, 10, 0, 0, 0)).toBe('In 3 days');
    });

    test('should return the correct time difference in hours', () => {
        const futureDate = new D(2024, 0, 0, 3, 0, 0);
        expect(futureDate.when(2024, 0, 0, 0, 0, 0)).toBe('In 3 hours');
    });

    test('should return the correct time difference in minutes', () => {
        const futureDate = new D(2024, 0, 0, 0, 12, 0);
        expect(futureDate.when(2024, 0, 0, 0, 0, 0)).toBe('In 12 minutes');
    });

    test('should return "Soon" for time difference less than a minute in the future', () => {
        const futureDate = new D(2024, 0, 0, 0, 0, 10);
        expect(futureDate.when(2024, 0, 0, 0, 0, 0)).toBe('Soon');
    });

    test('should return "Today" for time difference less than a minute in the past', () => {
        const pastDate = new D(2024, 0, 0, 0, 0, 55);
        expect(pastDate.when(2024, 0, 0, 0, 1, 0)).toBe('Today');
    });

    test('should return the correct time difference in minutes ago', () => {
        const pastDate = new D(2024, 0, 0, 0, 5, 0); 
        expect(pastDate.when(2024, 0, 0, 0, 10, 0)).toBe('5 minutes ago');
    });

    test('should return the correct time difference in hours ago', () => {
        const pastDate = new D(2024, 0, 0, 0, 0, 0);
        expect(pastDate.when(2024, 0, 0, 3, 0, 0)).toBe('3 hours ago');
    });

    test('should return the correct time difference in days ago', () => {
        const pastDate = new D(2024, 0, 0, 20, 0, 0);
        expect(pastDate.when(2024, 0, 10, 20, 0, 0)).toBe('10 days ago');
    });

    test('should return the correct time difference in months ago', () => {
        const pastDate = new D(2024, 0, 0, 0, 10, 0);
        expect(pastDate.when(2024, 3, 0, 0, 10, 0)).toBe('3 months ago');
    });

    test('should return the correct time difference in years ago', () => {
        const pastDate = new D(2022, 10, 0, 0, 0, 0);
        expect(pastDate.when(2024, 10, 0, 0, 0, 0)).toBe('2 years ago');
    });
});
