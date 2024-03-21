import { getMovieById, getMovieEpisodesById } from "@/actions/action";
import { DetailBanner } from "@/components/details/DetailBanner";
import { DetailCard } from "@/components/details/DetailCard";
const Series = async ({
  params: { seriesId },
}: {
  params: { seriesId: string };
}) => {
  const { data } = await getMovieById(seriesId);
  const result = await getMovieEpisodesById(seriesId);
  const eps = result.data;

  // console.log("eps=======>", eps);
  return (
    <div>
      {/* series details: {data.title} */}
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
      {/* <div>===================Trailer===================</div>
            <iframe className="rounded" src={data.trailer.embed_url} width={700} height={400}></iframe> */}
      <DetailBanner content={data} />
      <DetailCard content={data} eps={eps}/>

      {/* <div className="flex justify-between p-8 w-full gap-4">
        <div className="flex-1">
          <iframe
            className="w-full aspect-video rounded"
            src="https://www.youtube.com/embed/kRQbRAJ4-Fs?si=_12Yqy_Eh44MMoAK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          ></iframe>
        </div>
        <div className="flex-1">asdfghjk</div>
      </div>
      <div className="h-16"></div> */}
    </div>
  );
};

export default Series;
