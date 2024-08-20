import { PredictionServiceClient } from '@google-cloud/aiplatform';
import fs from 'fs';
import { GoogleAuth } from 'google-auth-library';

export const GET = async (req: Request) => {
  const imageFilePaths = fs.readdirSync('./public/uploads').map(fileName => `./public/uploads/${fileName}`);

  return new Response(JSON.stringify(imageFilePaths), { status: 200 });
};

export const POST = async (req: Request) => {

  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  const authClient = await auth.getClient();
  const accessToken = (await authClient.getAccessToken()).token;

  console.log(`Access Token: ${accessToken}`);

  // Read all the image file paths, stored in the public/uploads folder.
  const imageFilePaths = fs.readdirSync('./public/uploads').map(fileName => `./public/uploads/${fileName}`);

  // Loop through all the images and read the contents of all the images and store the data in an array of objects.
  let returnData = [];

  for (let i = 0; i < imageFilePaths.length; i++) {
    const content = fs.readFileSync(imageFilePaths[i], 'base64');
    const params = {
      "instances": [{
        "content": content,
      }],
      "parameters": {
        "confidenceThreshold": 0.5,
        "maxPredictions": 5
      }
    }

    // Set up the endpoint and project information
    const endpoint = `https://us-central1-aiplatform.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_VERTEX_AI_PROJECT_ID}/locations/us-central1/endpoints/${process.env.NEXT_PUBLIC_VERTEX_AI_MODEL_ENDPOINT_ID}:predict`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to make a prediction. Status: ${response.status}`);
    } else {
      const data = await response.json();
      returnData.push(data);
    }
  }

  return new Response(JSON.stringify(returnData), { status: 200 });
};