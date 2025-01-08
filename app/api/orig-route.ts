export const revalidate = 60
 
export async function GET() {
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()
    try {
      console.log('HIT-HIT');
      const posts = [
            {
                title: 'Post 1',
                content: 'This is my first post'
            },
            {
                title: 'Post 2',
                content: 'This is my
            }
        ];
      return Response.json(posts)
    } catch (error) {
      return Response.error('An error occurred');

    }
    
}