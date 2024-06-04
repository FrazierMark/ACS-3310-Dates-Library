/**
 * @class D
 * @classdesc A class that represents a date object
 */
class D {
	/**
	* @constructor
	* @param {number} year - The year of the date
	* @param {number} month - The month of the date
	* @param {number} date - The date of the month
	* @param {number} hours - The hours of the date
	* @param {number} minutes - The minutes of the date
	* @param {number} seconds - The seconds of the date 
	*/ 
	constructor(...args) {
		this._date = new Date(...args);
		this.fullMonthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		this.shortMonthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		this.fullDayNames = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		this.shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	}

	/**
	 * @returns {number} - returns the full year of the date
	 */
	get year() {
		return this._date.getFullYear();
	}

	/**
	 * @returns {number} - returns the last two digits of the year
	 */
	get yr() {
		let fullYear = this._date.getFullYear();
		return parseInt(fullYear.toString().slice(-2));
	}

	/**
	 * @returns {string} - returns the full month name of the date
	 */
	get month() {
		return this.fullMonthNames[this._date.getMonth()];
	}

	/**
	 * @returns {string} - returns the short month name of the date
	 */
	get mon() {
		return this.shortMonthNames[this._date.getMonth()];
	}

	/**
	 * @returns {string} - returns the full day name of the date
	 */
	get day() {
		return this.fullDayNames[this._date.getDay()];
	}

	/**
	 * @returns {string} - returns the short day name of the date
	 */
	get dy() {
		return this.shortDayNames[this._date.getDay()];
	}

	/**
	 * @returns {number} - returns the date of the month
	 */
	get date() {
		return this._date.getDate();
	}

	/**
	 * @returns {number} - returns the hours of the date
	 */
	get hours() {
		return this._date.getHours();
	}

	/**
	 * @returns {number} - returns the minutes of the date
	 */
	get mins() {
		return this._date.getMinutes();
	}

	/**
	 * @returns {number} - returns the seconds of the date
	 */
	get secs() {
		return this._date.getSeconds();
	}

	/**
	 * 
	 * @param {string} format - An optional string that represents the format of the date 
	 * @returns {string} - returns a string that represents the date in the format specified by the format parameter
	 * 
	 * @example
	 * const d = new D(2025, 6, 3, 3, 4, 5)
	 * console.log(d.format()) // "2025 June 3"
	 */

	format = (format = '') => {
		if (format === '') {
			return `${this.year} ${this.month} ${this.date}`;
		} else {
			return format
				.replace('Y', this.year)
				.replace('y', this.yr)
				.replace('M', this.month)
				.replace('m', this.mon)
				.replace('D', this.date)
				.replace('d', this.date)
				.replace('L', this.day)
				.replace('l', this.dy)
				.replace('#')
				.replace('H', this.hours.toString().padStart(2, '0'))
				.replace('h', this.hours)
				.replace('I', this.mins.toString().padStart(2, '0'))
				.replace('i', this.mins)
				.replace('S', this.secs.toString().padStart(2, '0'))
				.replace('s', this.secs);
		}
	};

	/**
	 * 
	 * @returns {string} - returns a string that represents the time difference between the current date and the date passed to the constructor
	 *
	 * @example
	 * const d = new D(2028, 5, 3, 3, 4, 5)
	 * console.log(d.when()) // "In 4 years"
	*/
	when = (...args) => {
    const now = new Date(...args);
    const diff = now - this._date;
    const absDiff = Math.abs(diff);
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    const month = day * 30.44;
    const year = day * 365.24;

    const getTimeString = (time, unit) => {
			const roundedTime = Math.round(absDiff / time);
			const pluralUnit = roundedTime === 1 ? unit : `${unit}s`;
			return diff < 0 ? `In ${roundedTime} ${pluralUnit}` : `${roundedTime} ${pluralUnit} ago`;
	};
	
    if (absDiff < min) {
        return diff < 0 ? 'Soon' : 'Today';
    } else if (absDiff < hour) {
        return getTimeString(min, 'minute');
    } else if (absDiff < day) {
        return getTimeString(hour, 'hour');
    } else if (absDiff < month) {
        return getTimeString(day, 'day');
    } else if (absDiff < year) {
        return getTimeString(month, 'month');
    } else {
        return getTimeString(year, 'year');
    }
};

}


module.exports = { D };