import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

export default class NoteHider extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();



		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'reveal-notes',
			name: 'Reveal Notes',
			callback: () => {
				new SampleModal(this.app).open();
			}
		});


	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
