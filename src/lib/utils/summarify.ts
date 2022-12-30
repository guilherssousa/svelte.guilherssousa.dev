export default function summarify(markdown: string) {
	const lines = markdown.split('\n');

	const topics = lines
		.filter((line) => line.startsWith('## '))
		.map((topic) => {
			const [markdownNote, value] = topic.split('## ');

			return value;
		});

	return topics;
}
