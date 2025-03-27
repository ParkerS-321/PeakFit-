import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = join(process.cwd(), 'content/blog')

export interface BlogPost {
  id: string
  title: string
  date: string
  content: string
  slug: string
}

export function getAllPosts(): BlogPost[] {
  try {
    // Get file names under /posts
    const fileNames = readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = join(postsDirectory, fileName)
        const fileContents = readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Convert markdown into HTML string
        const processedContent = remark()
          .use(html)
          .processSync(matterResult.content)
          .toString()

        return {
          id,
          slug: id,
          content: processedContent,
          ...(matterResult.data as { title: string; date: string })
        }
      })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = join(postsDirectory, `${slug}.md`)
    const fileContents = readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Convert markdown into HTML string
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content)
      .toString()

    return {
      id: slug,
      slug,
      content: processedContent,
      ...(matterResult.data as { title: string; date: string })
    }
  } catch (error) {
    return null
  }
} 