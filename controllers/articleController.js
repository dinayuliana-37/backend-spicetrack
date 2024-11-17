const articles = [
  {
    id: 1,
    title: "Spice Benefits",
    content: "Content about spices...",
    isFavorite: false,
  },
  // Add more articles here...
];

// Get a single article
exports.getSingleArticle = (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  const article = articles.find((a) => a.id === articleId);
  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }
  res.json(article);
};

// Get all articles
exports.getAllArticles = (req, res) => {
  res.json(articles);
};

// Search articles by keyword
exports.searchArticles = (req, res) => {
  const { keyword } = req.query;
  const result = articles.filter(
    (article) =>
      article.title.includes(keyword) || article.content.includes(keyword)
  );
  res.json(result);
};

// Menambahkan artikel ke favorit
exports.addToFavorite = (req, res) => {
  const { articleId } = req.body;
  if (!articleId) {
    return res.status(400).json({ message: "Article ID is required" });
  }

  // Logika untuk menambahkan artikel ke favorit (misalnya memperbarui database atau menandainya sebagai favorit)
  const article = articles.find((a) => a.id === articleId);
  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }
  article.isFavorite = true;

  // Menyimulasikan operasi yang berhasil
  res.status(200).json({ message: "Article added to favorites" });
};

// Remove article from favorites
exports.removeFromFavorite = (req, res) => {
  const { articleId } = req.body;
  const article = articles.find((a) => a.id === articleId);
  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }
  article.isFavorite = false;
  res.json({ message: "Article removed from favorites", article });
};
