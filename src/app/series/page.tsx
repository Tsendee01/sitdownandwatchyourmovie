import { getOwlCarouselData } from "@/actions/action";
import { SeriesList } from "@/components/series/SeriesList";

const Series = async () => {

  const CONTENTS = await getOwlCarouselData();

  return (
    <div className="">
      <SeriesList contents={CONTENTS}/>
    </div>
  );
};

export default Series;
