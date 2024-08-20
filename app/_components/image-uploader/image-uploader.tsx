"use client";
import { useRef } from "react";

export default function ImageUpload() {
  const fileInput = useRef<HTMLInputElement>(null);

  async function uploadFile(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <form className="gap-4 text-center">
      <label className="mb-10 mt-10">
        <input className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" ref={fileInput} type="file" name="file" accept="image/jpeg, image/png" /> 
      </label>
      <br />

      <button className="mt-5 px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 max-w-96" type="submit" onClick={uploadFile}>
        Submit
      </button>
    </form>
  );
}