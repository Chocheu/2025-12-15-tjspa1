import { createAsyncThunk } from "@reduxjs/toolkit";
import type { MemeInterface } from "orsys-tjs-meme";
import { REST_API_RESOURCES, REST_API_URL } from "../config/constantes";

export const saveMeme = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const response = await fetch(
      `${REST_API_URL}${REST_API_RESOURCES.images}${
        meme.id !== undefined ? "/" + meme.id : ""
      }`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(meme),
      }
    );

    return await response;
  }
);
