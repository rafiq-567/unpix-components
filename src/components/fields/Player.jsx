import PropTypes from "prop-types";
export default function Player({ label = "Video Player", url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }) {
  const videoId = url.includes("v=") ? url.split("v=")[1]?.split("&")[0] : "";
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">{label}</p>
      <div className="rounded-xl overflow-hidden border bg-black" style={{ aspectRatio: "16/9" }}>
        {videoId ? (
          <iframe width="100%" height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen className="w-full h-full" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-sm">Enter a YouTube URL</div>
        )}
      </div>
    </div>
  );
}
Player.propTypes = { label: PropTypes.string, url: PropTypes.string };