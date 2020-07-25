class WerewolfTracker {
	constructor () {
		this.total_entry_no = 0;
		this.journal = {};
	}
	checkIfFullyLogged () {
		let isFullyLogged = this.total_entry_no < 15 ? true : false;
		console.log(isFullyLogged);
		return isFullyLogged;
	}
	addEntry (array_of_events) {
		this.checkIfFullyLogged() ? () => {
			this.journal[`day_${this.total_entry_no+1}`] = array_of_events;
			this.total_entry_no++;
		}: '';
	}
	
	 
}
 
const jacques_tracker = new WerewolfTracker();
jacques_tracker.addEntry(['Went Swimming','Fought a Corona Patient']);
console.log(jacques_tracker);
// jacques_tracker.addEntry('test');
// console.log(ja)