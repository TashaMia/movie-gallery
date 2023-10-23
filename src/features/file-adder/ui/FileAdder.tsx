import { ChangeEvent, useEffect, useId, useRef, useState } from "react";
import { supabase } from "../../../app/database/supabase";
import { useAppDispatch } from "../../../app/global-store/hooks/reduxTypes";
import { getPoster } from "../../film-adder/model/reducers/addFilmSlice";
import { Image } from "@phosphor-icons/react";
import { getUserImg } from "../../comment-adder/model/reducers/addCommentSlice";

export default function FileAdder(props: { title: string }) {
  const filePicker = useRef<HTMLInputElement>(null);

  function handlePick() {
    filePicker?.current?.click();
  }

  const [picture, setPicture] = useState<File | null>(null);
  const bucket = "tasksImg";
  const [pictureList, setPictureList] = useState<string[]>([]);

  const [imageLoader, setImageLoader] = useState<string>("download");
  const [attantion, setAttantion] = useState(false);
  async function handleChangeFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = event.currentTarget.files as FileList;
    if (!files) return;
    const file = files[0];
    if (pictureList.length > 0) {
      setImageLoader("loaded");

      setAttantion(true);
      return;
    }
    setPicture(file && file);
    const filePath = `${bucket}/${window.crypto.randomUUID()}.jpg`;
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      throw error;
    } else {
      setImageLoader("loaded");
      setPictureList((prev) =>
        prev.concat(
          `https://vohakndhicppbrmoajtw.supabase.co/storage/v1/object/public/tasksImg/${filePath}`
        )
      );
    }
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (picture !== null) {
      setImageLoader("loading");
    }
  }, [picture]);
  if (pictureList.length > 0 && props.title == "Add poster") {
    dispatch(getPoster(pictureList[0]));
  }

  if (pictureList.length > 0 && props.title == "Add user avatar") {
    dispatch(getUserImg(pictureList[0]));
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button
          onClick={() => {
            handlePick();
          }}
        >
          <input
            ref={filePicker}
            type="file"
            onChange={(e) => {
              handleChangeFiles(e);
            }}
            accept="image/*,.png,.jpg,.gif"
            className=" opacity-0 h-0 w-0 hidden p-0 m-0"
          />
          <div className="flex gap-2 items-center">
            <p className="font-mono text-sm">{props.title}</p>
            <Image />
          </div>
        </button>
        {imageLoader == "loading" ? <span>loading</span> : <></>}
      </div>
      <div className="flex flex-col gap-2">
        {attantion && (
          <div className="font-mono text-xs text-red-800">
            <p>⚠️ You can only add 1 files</p>
          </div>
        )}
        {pictureList.length > 0 ? (
          <img
            src={pictureList?.[0]}
            width={80}
            height={80}
            alt="film poster"
            className="rounded-md"
          ></img>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
