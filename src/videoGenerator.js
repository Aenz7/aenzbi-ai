// src/videoGenerator.js
function generateVideo(title, duration, resolution) {
    return {
        title: title,
        duration: `${duration} mins`,
        resolution: resolution,
        createdAt: new Date(),
        description: `Video titled "${title}" of duration ${duration} mins and resolution ${resolution}.`,
    };
}

module.exports = generateVideo;
