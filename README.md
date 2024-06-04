# Dates-Library
![NPM Version](https://img.shields.io/npm/v/%40mfx2%2Fdates-library-util)
![NPM License](https://img.shields.io/npm/l/%40mfx2%2Fdates-library-util)
![GitHub last commit](https://img.shields.io/github/last-commit/FrazierMark/ACS-3310-Dates-Library)
![GitHub repo size](https://img.shields.io/github/repo-size/FrazierMark/ACS-3310-Dates-Library)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/FrazierMark/ACS-3310-Dates-Library)


This library provides a simple way to manipulate and format dates in JavaScript applications. With this library, you can easily create, format, and perform calculations with dates in various formats.

## Installation
npm install @mfx2/dates-library-util

## Usage

### Importing the Library
```const { DateManipulator } = require('@mfx2/dates-library-util')```

### Creating a Date
```const date = new DateManipulator(2025, 6, 3, 3, 4, 5)```

### Formatting a Date
```console.log(date.format());     // "2025 June 3"```
```console.log(d.format('y/m/d'))  // 17/Jan/2```
```console.log(d.format('H:I:S'))  // 03:04:05```
```console.log(d.format('h:i:s'))  // 3:4:5```

### Getting the Time Difference
```console.log(date.when());       // "Today"```


### API Documentation

#### DateManipulator(year, month, date, hours, minutes, seconds)
- Constructor to create a new DateManipulator object.

#### Properties
 - year: Returns the full year of the date.
 - month: Returns the full month name of the date.
 - day: Returns the full day name of the date.
 - date: Returns the date of the month.
 - hours: Returns the hours of the date.
 - minutes: Returns the minutes of the date.
 - seconds: Returns the seconds of the date.

#### Methods
 - format(format = ''): Formats the date based on the specified format string.
 - when(): Returns a string representing the time difference between the current date and the date passed to the constructor.