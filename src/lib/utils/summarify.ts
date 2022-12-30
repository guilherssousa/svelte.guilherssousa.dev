export default function summarify(markdown: string) {
	const lines = markdown.split('\n');

	const topics = lines
		.filter((line) => line.startsWith('## '))
		.map((topic) => {
			const [, value] = topic.split('## ');

			return {
				text: value,
				id: value.toLowerCase().replace(/ /g, '-')
			};
		});

	return topics;
}
