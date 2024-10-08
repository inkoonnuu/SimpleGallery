import { useEffect, useState } from "react";
import { Data } from "./data.jsx";

function Gallery() {
  const [images, setImages] = useState(Data);
  const [Src, setSrc] = useState(images[2].img);


  useEffect(() => {
    const UpdateImgaes = images.map((item) => {
 if(item.img==Src){
return {...item, filter:"brightness(100%)",scale:'1.5',boxShadow:'1px 0px 5px yellow'}
 }
 else{
  return {...item, filter:"brightness(30%)",scale:'1',boxShadow:'none'}

 }
    });

    setImages(UpdateImgaes);
  }, [Src]);



  return (
    <div className=" flex flex-col justify-center w-full items-center">

      <div
        className="bigScreen w-1/2 h-52  flex mt-5 rounded-lg border-4 border-purple-500 border-dashed border-opacity-70 p-1"
      >
        <img src={Src} alt="" width="100%" height="100%" />
      </div>
      <div className="flex gap-10 mt-10">
        {images.map((item) => {
          const { id, img, filter,scale,boxShadow } = item;

          return (
            <div key={id} className="cursor-pointer">
              <img
                src={img}
                data-src={img}
                alt=""
              
                className="img1 h-12 w-12"
                onClick={(ev) => {
                  setSrc(img);
                }}
                style={{ filter, borderRadius: "50%", transform: `scale(${scale})`,transition:"transform 0.3s ease",boxShadow }}
                />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Gallery;
