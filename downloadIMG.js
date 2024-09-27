function DownloadImageWithExtension(imageUrl) {
    fetch(imageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            var contentType = response.headers.get("Content-Type");
            var extension = contentType.split("/")[1]; // Get the extension from the content type
            return response.blob().then(blob => ({ blob, extension }));
        })
        .then(({ blob, extension }) => {
            var filename = "downloaded_image." + extension;
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}