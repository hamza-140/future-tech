import React, { useEffect, useState } from "react";

const BlogAnalyzer = ({ content }) => {
  const [toxicityScore, setToxicityScore] = useState(null);
  const [canPublish, setCanPublish] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastCheckedWordCount, setLastCheckedWordCount] = useState(0);

  const API_KEY = import.meta.env.VITE_PERSPECTIVE_API_URL;

  const wordCount =
    content.trim() === "" ? 0 : content.trim().split(/\s+/).length;

  const checkToxicity = async () => {
    setLoading(true);
    setError(null);
    setToxicityScore(null);
    setCanPublish(false);

    const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${API_KEY}`;

    const requestBody = {
      comment: { text: content },
      languages: ["en"],
      requestedAttributes: {
        TOXICITY: {},
        INSULT: {},
        PROFANITY: {},
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      const toxicity = result.attributeScores.TOXICITY.summaryScore.value;
      setToxicityScore(toxicity);
      setLastCheckedWordCount(wordCount);

      if (toxicity > 0.7) {
        setError("Your content is considered toxic. Please revise.");
        setCanPublish(false);
      } else {
        setCanPublish(true);
      }
    } catch (err) {
      setError("Error analyzing content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      wordCount > 0 &&
      wordCount % 20 === 0 &&
      wordCount !== lastCheckedWordCount
    ) {
      checkToxicity();
    }
  }, [wordCount]);

  const handlePublish = async () => {
    await checkToxicity();
    if (canPublish) {
      alert("✅ Blog Published Successfully!");
    }
  };

  return (
    <>
      {toxicityScore !== null && (
        <p>
          <strong>Toxicity Score:</strong> {(toxicityScore * 100).toFixed(2)}%
        </p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handlePublish}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          cursor: canPublish ? "pointer" : "not-allowed",
          backgroundColor: canPublish ? "green" : "gray",
          color: "white",
        }}
        disabled={!canPublish}
      >
        Publish Blog
      </button>

      <div
        style={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#555",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>📝 Word Count: {wordCount}</span>
        <span>
          API Checked:{" "}
          {lastCheckedWordCount === wordCount && wordCount > 0 ? (
            <span style={{ color: "green" }}>✅</span>
          ) : (
            <span style={{ color: "gray" }}>❌</span>
          )}
        </span>
      </div>
    </>
  );
};

export default BlogAnalyzer;
