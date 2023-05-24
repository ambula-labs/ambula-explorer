// Helper function to calculate time difference
export const getTimeDifference = (targetDate) => {
	const currentDate = new Date();
	const timeDiff = Math.abs(currentDate - targetDate);
	const minutesDiff = Math.floor(timeDiff / (1000 * 60));
	const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
	const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	if (minutesDiff < 1) {
		return "Just now";
	} else if (minutesDiff < 60) {
		return `${minutesDiff} min ago`;
	} else if (hoursDiff < 24) {
		return `${hoursDiff} hr ago`;
	} else {
		return `${daysDiff} day ago`;
	}
};
