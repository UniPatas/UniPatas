import { useState } from "react";

export function UploadImg() {
  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  }

  function handleUpLoad() {
    const formData = new formData();
    formData.append("file", file);
    fetch("url", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("success", result);
      })
      .catch((error) => {
        console.group("Error:", error);
      });
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleUpLoad}>
            <label
              id="picture"
              for="pictureinput"
              // className=" flex items-center justify-center w-[400px] h-[200px] bg-[#ccc] text-[#aaa] border-2 border-dashed border-current cursor-pointer transition-all ease-in-out duration-300 hover:text-[#777] "
            >
              <span id="pictureImage">Escolha uma imagem</span>
            </label>

            <input
              onChange={handleFile}
              className=" "
              type="file"
              name="pictureinput"
              id="pictureinput"
            ></input>
            <button className="bg-darker-purple text-white rounded p-[5px] hover:bg-pool-green">
                Publicar
              </button>
          </form>
        </div>
      </div>
    </>
  );
}
