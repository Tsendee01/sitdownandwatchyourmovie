"use server"

import axios from "axios"

export const getOwlCarouselData = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime?limit=5');
    const data = await res.json();

    // console.log(data);

    return data;
}