const mdxInput = document.getElementById("mdxInput");
const combineButton = document.getElementById("combineButton");
const downloadButton = document.getElementById("downloadButton");
const output = document.getElementById("output");
const outputFormat = document.getElementById("outputFormat");
const separator = document.getElementById("separator");
const filenamePrefix = document.getElementById("filenamePrefix");
const fileList = document.getElementById("fileList");
let files = [];

mdxInput.addEventListener("change", (event) => {
	files = Array.from(event.target.files);
	updateFileList();
});

function updateFileList() {
	fileList.innerHTML = '<h3 class="font-bold mb-2">Selected Files:</h3>';
	files.forEach((file) => {
		fileList.innerHTML += `<div>${file.name}</div>`;
	});
}

combineButton.addEventListener("click", () => {
	combineFiles();
	toggleLoading(true);
});

downloadButton.addEventListener("click", downloadCombinedFile);

function combineFiles() {
	if (files.length === 0) {
		alert("Please select MDX files first.");
		toggleLoading(false);
		return;
	}

	const readFilePromises = files.map((file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (e) =>
				resolve({ name: file.name, content: e.target.result });
			reader.onerror = (e) => reject(e);
			reader.readAsText(file);
		});
	});

	Promise.all(readFilePromises)
		.then((fileContents) => {
			const combinedContent = fileContents
				.map((file) => `// File: ${file.name}\n\n${file.content}`)
				.join(`\n\n${separator.value}\n\n`);
			output.value = combinedContent;
			downloadButton.disabled = false;
		})
		.catch((error) => {
			console.error("Error reading files:", error);
			alert("An error occurred while reading the files.");
		})
		.finally(() => {
			toggleLoading(false);
		});
}

function downloadCombinedFile() {
	const content = output.value;
	if (!content) {
		alert("No content to download. Please combine files first.");
		return;
	}

	const blob = new Blob([content], { type: "text/plain" });
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);

	const commonPrefix = findCommonPrefix(files.map((f) => f.name));
	const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
	const predictedName = `${filenamePrefix.value}${commonPrefix}_${timestamp}.${outputFormat.value}`;

	link.download = predictedName;
	link.click();
	URL.revokeObjectURL(link.href);
}

function findCommonPrefix(filenames) {
	if (filenames.length === 0) return "";
	return filenames.reduce((prefix, name) => {
		while (name.indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (prefix === "") return "";
		}
		return prefix;
	});
}

function toggleLoading(isLoading) {
	const loadingIndicator = document.getElementById("loadingIndicator");
	if (isLoading) {
		loadingIndicator.classList.remove("hidden");
	} else {
		loadingIndicator.classList.add("hidden");
	}
}
