import { describe, it, expect } from 'vitest';
import { timeFormat, todayOrYesterday } from '../index';

describe('convert date to string', () => {
    it('pass params is today', () => {
        expect(timeFormat(new Date(2023, 4, 12), 'YYYY/MM-DD')).toBe('2023/05-12');
    });
    it('判断某个日期是否是昨天', () => {
        expect(todayOrYesterday(new Date(2023, 4, 11), '2023-05-13')).toBe('');
    });
    it('判断是否是今天', () => {
        expect(todayOrYesterday(new Date(2023, 4, 14), '2023-05-14')).toBe('today');
    });
    it('判断某个日期是否是昨天', () => {
        expect(todayOrYesterday(new Date(2023, 4, 10), '2023-05-09')).toBe('yesterday');
    });
    it('判断某个日期是否是昨天', () => {
        expect(todayOrYesterday(new Date(2023, 0, 1), '2022-12-31')).toBe('yesterday');
    });
    it('判断某个日期是否是昨天', () => {
        expect(todayOrYesterday(new Date(2023, 4, 1), '2023-04-30')).toBe('yesterday');
    });
    it('判断某个日期是否是昨天', () => {
        expect(todayOrYesterday(new Date(2023, 2, 1), '2023-02-28')).toBe('yesterday');
    });
});
