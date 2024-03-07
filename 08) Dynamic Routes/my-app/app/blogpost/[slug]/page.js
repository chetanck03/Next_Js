export default function Page({ params }) {
    // throw new Error("error hai bai")

    // fetch your blog post by its slug
    let lang = ['python','c','c++']

    if(lang.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>Post not Found</div>

    }

  }