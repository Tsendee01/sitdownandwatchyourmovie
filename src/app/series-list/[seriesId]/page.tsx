import { getMovieById } from "@/actions/action";

const Series = async ({ params: { seriesId } }: { params: { seriesId: string } }) => {

    const { data } = await getMovieById(seriesId);
    console.log(data);
    return (
        <div>
            series details: {data.title}
            {/* <img src={data.trailer.images.image_url}/>
            <img src={data.trailer.images.small_image_url}/>
            <img src={data.trailer.images.medium_image_url}/>
            <img src={data.trailer.images.large_image_url}/>
            <img src={data.trailer.images.maximum_image_url}/>
            <div>
                ==================IMAGE=================
            </div>
            <img src={data.images.webp.image_url}/>
            <img src={data.images.webp.small_image_url}/>
            <img src={data.images.webp.large_image_url}/>
            <div>===================JPG================</div>
            <img src={data.images.jpg.image_url}/>
            <img src={data.images.jpg.small_image_url}/>
            <img src={data.images.jpg.large_image_url}/> */}
            <div>===================Trailer===================</div>
            <iframe className="rounded" src={data.trailer.embed_url} width={700} height={400}></iframe>

        </div>
    )
}

export default Series;