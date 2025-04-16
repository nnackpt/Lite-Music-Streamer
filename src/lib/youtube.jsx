export async function searchVideos(query) {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${query}&type=video&key=${API_KEY}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch videos')
        }

        const data = await response.json()

        return data.items.map(item => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            channel: item.snippet.channelTitle
        }))
    } catch (error) {
        console.error('Unable to call YouTube API:', error)
        return []
    }
}

export function extractVideoId(url) {
    if (!url) return null

    // supports various YouTube URL formats
    // https://www.youtube.com/watch?v=VIDEO_ID
    // https://youtu.be/VIDEO_ID
    // https://www.youtube.com/shorts/VIDEO_ID

    let videoId = null

    // for watch?v=
    const watchRegex = /[?&]v=([^&#]*)/
    const watchMatch = url.match(watchRegex)
    if (watchMatch && watchMatch[1]) {
        videoId = watchMatch[1]
    }

    // for youtu.be/
    const shortRegex = /youtu\.be\/([^?&#]*)/
    const shortMatch = url.match(shortRegex)
    if (shortMatch && shortMatch[1]) {
        videoId = shortMatch[1]
    }

    // for youtube.com/shorts/
    const shortsRegex = /\/shorts\/([^?&#]*)/
    const shortsMatch = url.match(shortsRegex)
    if (shortsMatch && shortsMatch[1]) {
        videoId = shortsMatch[1]
    }

    return videoId
}