import axios from "axios";


export async function getLyrics(track: String, artist: String) {
    try {
        const res = await axios.get(
            `/track.search?q_track=${track}&q_artist=${artist}&apikey=c8a353104f63b9c1065d57fc9d8349cb&page_size=10`
        )
        let track_id;
        if (res.data.message.body.track_list[0]) {
            track_id = res.data.message.body.track_list[0].track.track_id;
        }
        const lyrics = await axios.get(`/track.lyrics.get?track_id=${track_id}&apikey=c8a353104f63b9c1065d57fc9d8349cb&page_size=1`);
        if (lyrics.data.message && lyrics.data.message.body.lyrics) {
            return lyrics.data.message.body.lyrics?.lyrics_body;
        } else {
            return { error: "not found" }
        }
    } catch (err) {
        console.log(err)
    }
}