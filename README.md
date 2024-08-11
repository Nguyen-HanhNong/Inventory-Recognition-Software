# Pantry Image Recognition Application

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![OpenAI](https://a11ybadges.com/badge?logo=openai)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

![GitHub contributors](https://img.shields.io/github/contributors/Nguyen-HanhNong/Inventory-Recognition-Software?color=ffcc66&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Nguyen-HanhNong/Inventory-Recognition-Software?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/Nguyen-HanhNong/Inventory-Recognition-Software?style=for-the-badge)](https://github.com/Nguyen-HanhNong/star_book/network)
[![GitHub issues](https://img.shields.io/github/issues/Nguyen-HanhNong/Inventory-Recognition-Software?color=ffcc66&style=for-the-badge)](https://github.com/Nguyen-HanhNong/star_book/issues)
[![GitHub license](https://img.shields.io/github/license/Nguyen-HanhNong/Inventory-Recognition-Software?color=ffcc66&style=for-the-badge)](https://github.com/Nguyen-HanhNong/Inventory-Recognition-Software/blob/master/LICENSE)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=^20.10.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=^10.2.3&color=cb0000&style=for-the-badge)](https://nodejs.org)

## About The Project 

This project contains the code for an image recognition software, allowing for naming of common pantry items. The software uses the Google Cloud's Vertex API to match an image to a correspondsing commonly found pantry item. The software is built using React and NextJS, and is hosted on Vercel.

## Getting Started

### Prerequisites

- The project requires Node.js and npm to run. If you do not have Node.js installed, you can download it [here](https://nodejs.org/en/download/).
- The project will also require git and a valid GitHub account to run. You can download git [here](https://git-scm.com/downloads).

### Instructions

1. Clone the repository
   ```sh
   git clone

2. Create an .env.local file in the root directory of the project and add the following environment variables:
   ```sh
      NEXT_PUBLIC_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
      NEXT_PUBLIC_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<YOUR_FIREBASE_MEASUREMENT_ID>

3. Install NPM packages
   ```sh
    npm install

4. Run the project
   ```sh
   npm run start

5. Open the project in your browser
   ```sh
   http://localhost:3000/

## License

Distributed under the GNU General Public License v3.0. See `LICENSE` for more information.