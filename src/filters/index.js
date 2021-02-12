import moment from 'moment';

export function numberToFixed (val, num = 2) {
	if (!val) {
		return '--';
	} else {
		return Number.isInteger(val) ? val : Number(val).toFixed(num);
	}
};

export function formatDate (val, format) {
	if (!val) return '--';
	let fmt = format || 'YYYY-MM-DD HH:mm:ss';
	return moment(val).format(fmt);
};

export function formatAmount (val, num = 2) {
	if (val !== null && val !== '' && val !== undefined) {
        return Number(val).toFixed(num);
    } else {
        return Number(0).toFixed(num);
    }
};

export function formatStr (val) {
	if (!val) {
        return val;
    } else {
        return String(val);
    }
};

export function handleEmptyVal (val) {
	if (!val) {
        return '--';
    }
    return val; 
};

export function formatZero (val) {
    if (val) {
        if (String(val) === '0') {
            return '--';
        } else {
            return val;
        }
    } else {
        return '--';
    }
};
