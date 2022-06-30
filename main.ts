import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

export default class NoteHider extends Plugin {

	async onload() {

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'reveal-notes',
			name: 'Reveal Notes',

            
		});


	onunload() {

	}
}
}