class WerewolfTracker {
	constructor () {
		this.total_entry_no = 0;
		this.journal = {};
	}
	get entry_no () {
		return Object.keys(this.journal).length;
	}
	display (value) {
		console.log(value);
	}
	inputEntry (array_of_events) {
		this.checkIfFullyLogged() ? '' : this.addEntryToJournal(array_of_events);
	}
	checkIfFullyLogged () {
		let isFullyLogged = this.total_entry_no === 14 ? true : false;
		return isFullyLogged;
	}
	formatText (text) {
		let sentence_case = text.trim().toLowerCase();
		sentence_case = sentence_case.charAt(0).toUpperCase() + sentence_case.slice(1);
		return sentence_case;
	}
	addEntryToJournal (array_of_events) {
		array_of_events = array_of_events.map((x) => this.formatText(x));
		this.journal[`day_${this.total_entry_no+1}`] = array_of_events;
		this.total_entry_no++;
	}
	EmptyJournal () {
		return 'Jacques has not made any Entries into this Journal';
	}
	NoEntry () {
		return 'Jacques has not made any Entry for this day';
	}
	checkIfEventCausedTransform (event) {
		event = event.toLowerCase();
		return event.includes('pizza') ? true : false;
	}
	checkIfTransformed (day) {
		let array_of_events = this.getJournalEntry(day);
		let isTransformed = array_of_events.some((x) => this.checkIfEventCausedTransform(x));
		return isTransformed;
	}
	getJournalEntry (day) {
		return this.journal.hasOwnProperty(day) ? this.journal[day] : false;
	}
	getTransformlog () {
		let log_array = Object.values(this.journal)
		return log_array;
	}
	displayEvents (day) {
		if (!this.getJournalEntry(day)) {
			this.display(this.NoEntry());
		}else {
			this.display(this.formatEntryOutput(day))
		}
	}
	formatEntryOutput (day) {
		let day_num = day.split('_')[1];
		let activity_arr = this.getJournalEntry(day).join(', ');
		return `On Day ${day_num} Jacques ${activity_arr}`;
	}
	showJournalEntry (day) {
		Object.keys(this.journal).length > 0 ? 
		this.displayEvents(day) :
		this.display(this.EmptyJournal()); 
	}
	showTransformStatus (day) {
		let day_num = day.split('_')[1];
		this.checkIfTransformed (day) ? 
		this.display(`On Day ${day_num} Jacques transformed because Jacques ate Pizza`) : 
		this.display(`On Day ${day_num} Jacques did not transform`);
	}
	showTransformLog () {
		let all_days = Object.keys(this.journal);
		all_days.forEach((day)=>this.showTransformStatus(day));
	}
	showTotalEntryNo () {
		console.log(this.entry_no);
	}
	showAllEntries () {
		let all_days = Object.keys(this.journal);
		all_days.forEach((day)=>this.showJournalEntry(day));
	}
}
const jacques_tracker = new WerewolfTracker();
jacques_tracker.inputEntry(['went Swimming','fought a Corona Patient']);
jacques_tracker.inputEntry(['quit HNG','joined Genesys']);
jacques_tracker.inputEntry(['opened upwork account']);
jacques_tracker.inputEntry(['ate pizza','bought new pc']);
jacques_tracker.inputEntry(['played fortnight','made a video']);
jacques_tracker.inputEntry(['movie night','munched some pizza']);
jacques_tracker.inputEntry(['Spent day figuring out why I transform to a werewolf']);
jacques_tracker.inputEntry(['Read through journal','ate bread']);
jacques_tracker.inputEntry(['bought phone']);
jacques_tracker.inputEntry(['made love']);
jacques_tracker.inputEntry(['bought some pizza']);
jacques_tracker.inputEntry(['spent day venting about transformation']);
jacques_tracker.inputEntry(['drank soda']);
jacques_tracker.inputEntry(['went through learnable outline']);

// jacques_tracker.showJournalEntry('day_1');
// jacques_tracker.showAllEntries();
// jacques_tracker.showTransformStatus('day_1');
// jacques_tracker.showTotalEntryNo();
jacques_tracker.showTransformLog();
