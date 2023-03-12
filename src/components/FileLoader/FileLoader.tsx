import React, {
  useState,
  ChangeEvent
} from "react"
import { Button } from "@/components/Button"
import style from './FileLoader.module.scss'
export const FileLoader = ({}) => {
  const [selectFile, setSelectFile] = useState<File | null>(null)
  const [currentFile, setCurrentFile] = useState<String>()

  /**
   * Хандлер инпута
   */
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    console.log(e.target.files[0])
    setSelectFile(e.target.files[0])
  }

  /**
   * Хандлер файла
   */
  const fileLoaderHandler = () => {
    if (!selectFile) return

    const reader = new FileReader()

    reader.onload = (e) => {
      if (typeof e.target?.result !== 'string') return

      setCurrentFile(e.target.result)
    }

    reader.readAsText(selectFile)
  }

  return (
    <div className={style.fileLoader}>
      <div className={style.fileLoader__inputWrapper}>
        <label className={style.fileLoader__inputLabel}>
        <input
          type="file"
          onChange={inputHandler}
          className={style.fileLoader__input}
        />
        <h2 className={style.fileLoader__title}>
          Выберите файл
        </h2>
        {selectFile
          ? (
            <>
              <Button
                onChange={fileLoaderHandler}
              >
                Выбрать другой
              </Button>
              <Button
                onChange={fileLoaderHandler}
                cancelType
              >
                Удалить
              </Button>
            </>
          )
          : (
            <Button
            onChange={fileLoaderHandler}
          >
            Выбрать файл
          </Button>
          )
        }
        </label>
      </div>
      {selectFile && (
        <div>
          { selectFile.name }
        </div>
      )}
      {currentFile && (
        <div className={style.fileLoader__text}>
          { currentFile }
        </div>
      )}

    </div>
  )
}
