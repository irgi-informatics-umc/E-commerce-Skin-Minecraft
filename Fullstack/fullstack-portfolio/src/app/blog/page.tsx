import { getAllBlogPosts } from '@/lib/blog';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights about software development',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  if (posts.length === 0) {
    return (
      <main className="min-h-screen py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading>Blog</SectionHeading>
          <div className="rounded-lg bg-secondary/50 p-12 text-center">
            <p className="text-muted-foreground">
              Blog posts coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading>Blog</SectionHeading>
        <p className="mb-12 text-lg text-muted-foreground">
          Thoughts, tutorials, and insights about software development
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group h-full transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Date & Reading Time */}
                  <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min read
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
