"use server"

import axios from "axios"

export const getOwlCarouselData = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime?limit=20');
    const { data } = await res.json();
    let result = data;

    while(data.length < 3) {
        result.push(data[0])
    }

    return result;
}