const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const schema = require("@quasibit/eleventy-plugin-schema");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/admin');

    // eleventyConfig.addPlugin(pluginRss);
    // eleventyConfig.addPlugin(pluginSyntaxHighlight);
    // eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(schema);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
        })

    eleventyConfig.addFilter('iso8601', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO()
      })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}