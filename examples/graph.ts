interface Graph {
	readonly vertices: Vertex[];
}

interface Vertex {
	readonly neighbours: Vertex[];
}

const bfs = (start: Vertex, end: Vertex): boolean => {
	const queue: Vertex[] = [];
	const visited: Vertex[] = [];
	queue.push(start);

	while (queue.length > 0) {
		const vertex = queue.shift();
		if (!vertex) {
			continue;
		}

		if (vertex === end) {
			return true;
		}

		visited.push(vertex);
		vertex.neighbours.forEach((neighbour: Vertex) => {
			if (!visited.includes(neighbour)) {
				queue.push(neighbour);
			}
		});
	}

	return false;
};
