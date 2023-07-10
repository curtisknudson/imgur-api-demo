// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientId = "9b8d5c3374259e6";

  const { image } = req.body;

  const headersList = {
    Accept: "*/*",
    Authorization: `Client-ID ${clientId}`,
  };

  if (image) {
    const stringifiedImage = JSON.stringify(image);

    await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      body: stringifiedImage,
      headers: headersList,
    })
      .then((res) => res.json())
      .then((data) => res.status(200).json({ data }));
    return;
  }

  res.status(200).json({ invalidImage: image });
}
