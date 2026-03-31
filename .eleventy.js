const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Renders markdown (and other template) files from within templates.
  // Used in index.njk to pull in content/*.md sections.
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Pass through static assets (CSS is handled by Tailwind CLI, not copied here)
  eleventyConfig.addPassthroughCopy("src/img");

  // Watch src/css so 11ty rebuilds when CSS source changes
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
