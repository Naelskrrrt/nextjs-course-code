import { useRouter } from 'next/router'

export default function BlogPostsPage(){

    let router = useRouter()
    console.log(router.query);
    return <div>
        <h1> The Blog Posts </h1>
    </div>
}