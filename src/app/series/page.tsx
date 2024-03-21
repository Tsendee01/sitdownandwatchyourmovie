import { getOwlCarouselData } from "@/actions/action";
import { SeriesList } from "@/components/series/SeriesList";

const SeriesListPage = async () => {

  const CONTENTS = await getOwlCarouselData();

  return (
    <div className="">
      <SeriesList contents={CONTENTS}/>
    </div>
  );
};

export default SeriesListPage;
