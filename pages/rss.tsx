import React from 'react'
import { domain } from 'lib/config'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { dbQuery } from '../lib/notion'

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

const blogPostsRssXml = async blogPosts => {
  let latestPostDate = '';
  let rssItemsXml = '';
  for (let i = 0; i < blogPosts.length; i++) {
    // blogPosts.forEach(async (post) => {
    const post = blogPosts[i]
    const postDate = Date.parse(post.created_time);

    // Remember to change this URL to your own!
    const postHref = `https://caos.me/${post.id}`;
    const mdblocks = await n2m.pageToMarkdown(post.id);
    const mdString = n2m.toMarkdownString(mdblocks);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }

    rssItemsXml += `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${postHref}</link>
        <pubDate>${post.date}</pubDate>
        <guid isPermaLink="false">${postHref}</guid>
        <description>
        <![CDATA[${post.excerpt}]]>
        </description>
        <content:encoded>
          <![CDATA[${mdString}]]>
        </content:encoded>
    </item>`;
  };
  return {
    rssItemsXml,
    latestPostDate
  };
};

const getRssXml = async blogPosts => {
  const { rssItemsXml, latestPostDate } = await blogPostsRssXml(blogPosts);

  // Edit the '<link>' and '<description>' data here to reflect your own website details!
  return `<?xml version="1.0" ?>
  <rss
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    version="2.0"
  >
    <channel>
        <title><![CDATA[Frontend development articles by Rob Kendal]]></title>
        <link>https://myamazingwebsite.com</link>
        <description>
          <![CDATA[A description about your own website that really shows off what it's all about]]>
        </description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};


export const getServerSideProps = async (ctx) => {
  try {
    const props = await resolveNotionPage(domain)
    const res = ctx.res;
    const { results = [] } = await dbQuery('69d0f53c-2357-4adb-9793-ae9e0444f176')

    let blogPosts = results.map(page => {

      const { created_time, id, properties } = page
      const title = properties.Name.title[0].plain_text
      const excerpt = properties.Excerpt.rich_text[0].plain_text
      return {
        title,
        created_time,
        id,
        excerpt
      }
    })

    const RSS = await getRssXml(blogPosts)
    if (!res) {
      return;
    }
    res.setHeader("Content-Type", "text/xml");
    res.write(RSS);
    res.end();

    return { props }
  } catch (err) {
    console.error('page error', domain, err)
    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function RSSPage(props) {
  return null
}
